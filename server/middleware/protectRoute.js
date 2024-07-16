const jwt = require("jsonwebtoken");
const User=require('../models/userModel.js');

const protectRoute =async(req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).send({ error: " unautherized-not token provide" });
    }
    const decode=jwt.verify(token,process.env.SECRET_KEY)
    console.log('decode '+decode)

  if(!decode){
    res.status(401).send({ error: " unautherized-Invalid token" });
  }
   const user=await User.findById(decode.userId).select("-password");
   if(!user){
    res.status(404).send({ error: " user not found" });
   }

   req.user=user;
   next();

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error in protect route" });
  }
};

module.exports = protectRoute;
