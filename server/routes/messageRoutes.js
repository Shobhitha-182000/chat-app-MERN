const route=require('express').Router();
const MessageController=require('../controllers/messageController')

route.post('/send/:id',MessageController.sendMessages)
route.get('/send',MessageController.sendMessages)

module.exports=route;