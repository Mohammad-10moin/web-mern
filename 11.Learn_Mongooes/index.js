const express= require("express");
const app = express();

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://moinuddin10code:Moin_10Mongo@cluster0.ohlry.mongodb.net/todo-app-database");

const {userModel,todoModel}=require("./db"); //this is the way how we import in js from other js files

const jwt= require("jsonwebtoken");
JWT_SECRET="Secret Key";

app.use(express.json());//we need to use this to get the values from req.body 

app.post("/signup",async (req,res)=>{
    
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    await userModel.create({
        email:email,
        password:password,
        name:name
    })
    res.json({
        msg:"You are logged in"
    })
});
app.post("/login",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    const user= await userModel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_SECRET);
        res.json({
            msg:"you are signed in",
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

