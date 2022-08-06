const mongoose=require("mongoose");
const url="mongodb://localhost:27017/testUser";
mongoose.connect(url,{},(error)=>{
    if(error){
        console.log("Error is",error);
    }
    else{
        console.log("DB Connected!!!");
    }
})