 const express=require('express');
const app=express();
const socketIo=require('socket.io')
const http=require('http')
const mongoose=require('mongoose');
const { Socket } = require('engine.io');
const ConnectDB=require('./util/db.js');
const cors=require('cors');
const UserAuthRouter=require('./routes/userAuthRouter.js')
const UserModel=require('./models/userModel.js')
const ConversationModel=require('./models/conversationModel.js')
const MessageModel=require('./models/messageModel.js')
const MessageRoutes=require('./routes/messageRoutes.js')
const ConversationRoutes=require('./routes/conversationRoutes.js')

ConnectDB();
app.use(express.json());
app.use(cors())

const port=process.env.PORT||5000;

 app.use('/user',UserAuthRouter)
 app.use('/message',MessageRoutes)
 app.use('/conversation',ConversationRoutes)


app.listen(port,()=>{
    console.log(`server ${port} is runnning....`)
})