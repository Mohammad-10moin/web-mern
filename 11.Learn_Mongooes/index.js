const bcrypt = require("bcrypt");
const {z}= require("zod");

const express= require("express");
const app = express();

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://moinuddin10code:Moin_10Mongo@cluster0.ohlry.mongodb.net/todo-app-database");

const {userModel,todoModel}=require("./db"); //this is the way how we import in js from other js files

const jwt= require("jsonwebtoken");
JWT_SECRET="Secret Key";

app.use(express.json());//we need to use this to get the values from req.body 

app.post("/signup",async (req,res)=>{

    const requiredData= z.object({
        email:z.string().min(8,"email must be atleast 8 characters").max(20,"email must be at max 20 characters").email("Invalid email address"),
        password:z.string().min(8).max(128)
            .regex(/[a-z]/,"password must contain atleast one small letter")
            .regex(/[A-Z]/,"password must contain atleast one capital letter")
            .regex(/[0-9]/,"password must contain atleast one digit")
            .regex(/[@#$%&*!`~?*]/,"password must contain atleast one special character"),
        name:z.string().min(3).max(20)
    })
    
    const successfulParsed= requiredData.safeParse(req.body);
    if(!successfulParsed.success){
        res.json({
            msg:successfulParsed.error.issues[0].message,
            // error:successfulParsed.error
        })
        return
    }

    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    try{
        const hashedpswd=await bcrypt.hash(password,5);
        await userModel.create({
            email:email,
            password:hashedpswd,
            name:name
        })
    }catch(e){
        console.log(e);
        res.status(403).json({
            msg:"Duplicate email"
        })
        return;
    }
    res.json({
        msg:"You are signed up"
    })
});
app.post("/login",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    const user= await userModel.findOne({
        email:email
        // password:password/
    })

    if(!user){
        res.status(403).json({
            msg:"No such user found"
        })
        return;
    }

    const pswdMatch= await bcrypt.compare(password,user.password);
    if(pswdMatch){
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_SECRET);
        res.json({
            msg:"you are logged in",
            token:token
        })
    }
    else{
        res.status(403).json({
            msg:"Incorrect Credentials"
        })
    }
});
app.post("/todo",auth,async (req,res)=>{
    const userid=req.userId;
    console.log(userid);
    const title=req.body.title;
    const done = req.body.done;
    await todoModel.create({
        title:title,
        done:done,
        userId:userid
    })
    res.json({
        msg:"todo created successfully"
    })
});
app.get("/todos",auth, async (req,res)=>{
    const userid=req.userId;
    const todos = await todoModel.find({
        userId:userid
    });
    res.json({todos});
});

function auth(req,res,next){
    const token= req.headers.token;

    decodeduser=jwt.verify(token,JWT_SECRET);
    if(decodeduser){
        req.userId=decodeduser.id;
        next();
    }
    else{
        res.status(403).json({
            msg:"Incorrect credentials"
        })
    }
}
app.listen(3000);

