const express=require("express");
const userRouter=require("./routes/userRoute");
const dotenv=require("dotenv");
require("./routes/db");
const app=express();

dotenv.config({"path":"./config.env"});

app.use(express.json());
app.use(express.urlencoded({extended:false}));
 

app.use("/user/api",userRouter);
app.all("*",(req,res,next)=>{
    res.status(404).json({status:"fail",message:`Can't Find ${req.originalUrl} on this server`})
})
const PORT=process.env.PORT||5000;









app.listen(`${PORT}`,()=>{
    console.log(`server is up on ${PORT}`);
})