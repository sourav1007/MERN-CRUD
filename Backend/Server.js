const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
app.use(express.json())
const cors=require("cors")
app.use(cors());
const mongoose=require("mongoose");
const User=require("./Models/userModel");
const userRoute=require("./Routes/userRoute");
app.use(userRoute);

mongoose.connect(process.env.URI).then(()=>{
    app.listen(process.env.PORT || 5000 ,(error)=>{
        console.log(`Server is Running at PORT ${process.env.PORT}`);
    })
    console.log("Database Connected Successfully.....");
}).catch((error)=>{
    console.log(error);
})
