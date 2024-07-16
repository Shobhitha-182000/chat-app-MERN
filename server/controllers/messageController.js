const Message = require("../models/messageModel");
const Conversation = require("../models/conversationModel");

exports.sendMessages = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // This will come from middleware
    console.log('Receiver ID:', receiverId);
    console.log('Sender ID:', senderId);

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    await newMessage.save();

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await conversation.save();
    }
    // await Promise.all(conversation.save(),newMessage.save())
    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

exports.getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
