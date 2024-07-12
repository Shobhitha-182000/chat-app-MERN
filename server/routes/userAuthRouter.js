const express=require('express')
const router=express.Router();
const UserAuthRouter=require('../controllers/userAuthController')

router.post('/signup',UserAuthRouter.signupPage)
router.post('/login',UserAuthRouter.loginPage)


module.exports=router;