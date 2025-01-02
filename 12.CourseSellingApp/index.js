const express =require("express");
const app=express();

const jwt= require("jsonwebtoken");
const jwt_secret="SecretKey"

const {userRouter}=require("./routes/user");
const {courseRoute}=require("./routes/course");
const {adminRoute}=require("./routes/admin");

const mongoose=require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URI)
    .then(()=>console.log("connected to db"))
    .catch(err=>console.log("DB connection error",err));

const {userModel , adminModel, courseModel, purchaseModel}=require("./db");

app.use("/user",userRouter)
app.use("/course",courseRoute)
app.use("/admin",adminRoute)
app.use(express.json());



app.listen(3000);