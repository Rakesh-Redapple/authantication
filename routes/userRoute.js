const express=require("express");
const router=express.Router();
const Controller=require("../controllers/authentication");

router.post("/signup",Controller.signup);
router.post("/login",Controller.login);
router.get("/getAllUser",Controller.getAllUser);









module.exports=router;