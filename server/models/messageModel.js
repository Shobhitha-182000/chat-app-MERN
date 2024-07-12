const mongoose=require('mongoose');

const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    RequestId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const messageModel =mongoose.model("Messages",messageSchema);

module.exports=messageModel;