const express=require("express");
const userRouter=require("./routes/userRoute");
require("./routes/db");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/user/api",userRouter);
const PORT=process.env.PORT||5000;









app.listen(`${PORT}`,()=>{
    console.log(`server is up on ${PORT}`);
})