const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// exports.signup=async(req,res,next)=>{
//     const newUser= await User.create(req.body,error=>{
//there is security flase any one can login as admin need to fix

//         if(error){
//             res.json({code:400,data:{error:error.message},msg:"Something went wrong"})
//         }
//         else{
//             res.status(201).json({status:"success",data:{user:newUser},msg:"signup done"})
//         }
//     });

// }

exports.signup = async (req, res, next) => {
  const token = await jwt.sign({ id: User._id }, process.env.JWT_SECRET);
  const newUser = await new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  newUser.save((error, data) => {
    if (error) {
      res.json({
        code: 201,
        data: { error: error.message },
        msg: "something went wrong"
      });
    } else {
      res.json({ code: 200, data: { token, data }, msg: "signup Done!" });
    }
  });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if(!email || !password){
      res.json({code:403,code:{},msg:"invalid enter creditional"});
  }
  if (email === " " || password === " ") {
    res.json({ code: 400, success: false, msg: "enter email and password!" });
  }
  const exitEmail = await User.findOne({ email: email });
  console.log(exitEmail);
  if (!exitEmail) {
    res.json({ code: 400, data: {}, msg: "enter email does not exit" });
  } else {
    const matched =await  bcrypt.compare(password, exitEmail["password"]);
    if (matched) {
      res.json({ code: 200, msg: "login success" });
    } else {
      res.json({ code: 404, msg: "enter password is wrong" });
    }
  }
};
