const {Router}=require("express");
const userRouter=Router();

const{z}=require("zod");
const bcrypt=require("bcrypt");
const { userModel,purchaseModel, courseModel } = require("../db");
const {userMiddleware}=require("../middlewares/user")

const jwt=require("jsonwebtoken");
const { jwt_secret_user } = require("../config");

userRouter.post("/signup",async (req,res)=>{
    
    const reqdata=z.object({
        email:z.string().min(5,"email must be atleast 5 characters").max(30,"email must be at max 30 characters").email("Invalid email format"),
        firstname:z.string().min(5).max(20),
        lastname:z.string().min(5).max(20),
        password:z.string()
            .regex(/[a-z]/,"password must contain atleast one small letter")
            .regex(/[A-Z]/,"password must contain atleast one capital letter")
            .regex(/[!@#$%^&*?<>,.]/,"password must contain atleast one special character")
            .regex(/[0-9]/,"password must contain atleast one number")
    })

    const successfulparsed=reqdata.safeParse(req.body);
    if(!successfulparsed.success){
        res.json({
            msg:successfulparsed.error.issues[0].message,
            message:successfulparsed.error
        })
        return;
    }

    const {email, firstname, lastname,password}=successfulparsed.data;

    try{
        const hpswd=await bcrypt.hash(password,3);
        await userModel.create({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:hpswd
        })
    }
    catch(e){
        res.status(403).json(
           { msg:"duplicate email"}
        )
        return;
    }
    res.json({
        msg:"you are signed up"
    })

})

userRouter.post("/signin",async (req,res)=>{
    const {email,password}=req.body;
    const founduser=await userModel.findOne({
        email:email
    })

    if(!founduser){
        res.status(403).json({
            msg:"Signup first!"
        })
        return;
    }

    const correctpswd=await bcrypt.compare(password,founduser.password);
    if(correctpswd){
        const token=jwt.sign({
            id:founduser._id.toString()
        },jwt_secret_user)
        res.json({
            msg:"you are signed in",
            token:token
        })
    }else{
        res.status(403).json({
            msg:"incorrect credentials"
        })
        return;
    }
})


userRouter.get("/purchases",userMiddleware, async(req,res)=>{
    const userid=req.userid;
    const purchasedCourses=await purchaseModel.find({
        userid:userid
    })

    const coursedata= await courseModel.find({
        _id:{$in : purchasedCourses.map(x => x.courseid)}
        // _id:purchasedCourses.courseid --can't get courseid without using the map function and to get the id , we need to use $in: constraint 
    })
    res.json({
        purchasedCourses,
        coursedata
    })
})

module.exports={
    userRouter:userRouter
}