const User = require("../models/userModel");

exports.getUserBySideBar=async(req,res)=>{
    try{
        const logedUserId=req.user._id;
        
    const filterUser=await User.find({_id:{$ne:logedUserId}}).select("-password")

    res.status(200).json(filterUser)

    }catch (error) {
        console.log(error);
        res.status(500).json("Internal server error in get user");
      }
}