const route=require('express').Router();
const MessageController=require('../controllers/messageController')
const protectRoute=require('../middleware/protectRoute')

route.post('/send/:id',protectRoute,MessageController.sendMessages)
route.get('/:id',protectRoute,MessageController.getMessage)

module.exports=route;