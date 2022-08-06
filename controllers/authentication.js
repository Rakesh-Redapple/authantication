const User=require("../models/userModel");
exports.signup=async(req,res,next)=>{
    const newUser= await User.create(req.body,error=>{
        
        if(error){
            res.json({code:400,data:{error:error.message},msg:"Something went wrong"})
        }
        else{
            res.status(201).json({status:"success",data:{user:newUser},msg:"signup done"})
        }
    });
   

}
