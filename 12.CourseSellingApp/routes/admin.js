const {Router}=require("express")
const adminRoute=Router();

const {z}=require("zod");
const bcrypt=require("bcrypt");
const { adminModel } = require("../db");

const jwt=require("jsonwebtoken");
const {jwt_secret_admin}=require("../config");

adminRoute.post("/signup",async (req,res)=>{
    
    const required_data=z.object({
        email:z.string().min(5,"email must be atleast 5 characters").max(30,"email must be at max 30 characters").email("Invalid email format"),
        firstname:z.string().min(5).max(20),
        lastname:z.string().min(5).max(20),
        password:z.string()
            .regex(/[a-z]/,"password must contain atleast one small letter")
            .regex(/[A-Z]/,"password must contain atleast one capital letter")
            .regex(/[!@#$%^&*?<>,.]/,"password must contain atleast one special character")
            .regex(/[0-9]/,"password must contain atleast one number")
    })

    const parsed=required_data.safeParse(req.body);
    if(!parsed.success){
        res.json({
            msg:parsed.error.issues[0].message
        })
        return;
    }

    // const firstname=req.body.firstname;
    // const lastname=req.body.lastname
    // const password=req.body.password;
// --> above lines are old way , the new way is to destructure the code as below 
    const {email, firstname, lastname , password}=req.body;

    //hashing the password using the bcrypt library
    try{
        const hashpwd=await bcrypt.hash(password,4);
        await adminModel.create({
            email:email,
            password:hashpwd,
            firstname:firstname,
            lastname:lastname
        })
    }
    catch(e){
        console.log(e);
        res.status(403).json({
            msg:"Duplicate email"
        })
        return;
    }
    res.json({
        msg:"You are signed up"
    })

})

adminRoute.post("/signin",async (req,res)=>{
    const { email, password}=req.body;
    const fuser=await adminModel.findOne({
        email:email
    })
    if(!fuser){
        res.status(403).json({
            msg:"Signup first!!"
        })
        return;
    }

    const iscorrectpwd=await bcrypt.compare(password,fuser.password);
    if(iscorrectpwd){
        const token=jwt.sign({
            id:fuser._id.toString()
        },jwt_secret_admin)
        res.json({
            msg:"you are signed in ",
            token:token
        })
    }
    else{
        res.status(403).json({
            msg:"Incorrect credentials"
        })
        return;
    }
})

adminRoute.post("/",(req,res)=>{

})

adminRoute.delete("/",(req,res)=>{

})

adminRoute.put("/",(req,res)=>{

})

adminRoute.get("/all",(req,res)=>{

})

module.exports={
    adminRoute:adminRoute
}