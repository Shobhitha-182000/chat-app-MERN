
const router=require('express').Router()
const conversationController=require('../controllers/conversationController')

router.post('/',conversationController.sendConversation)

module.exports=router