const protectRoute = require('../middleware/protectRoute');
const userChatController=require('../controllers/userChatController');

const route=require('express').Router();

route.get('/side',protectRoute,userChatController.getUserBySideBar)


module.exports=route;