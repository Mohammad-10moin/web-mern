const express = require("express");
const app=express();

const jwt=require("jsonwebtoken")
const JWT_SECRET="randomKey";
let users=[];

app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/signup",(req,res)=>{
    const username= req.body.username;
    const password= req.body.password;

    users.push({
        username:username,
        password:password
    })
    res.json({
        msg:"you signed up"
    })
})

app.post("/signin",(req,res)=>{
    const username= req.body.username;
    const password= req.body.password;

    const founduser=users.find(u=>{
        if(u.username==username && u.password==password){
            return true;
        }
        else{
            return false;
        }
    })

    if(founduser){
        const token= jwt.sign({
            username:username
        },JWT_SECRET);
        res.json({
            token:token
        })
    }
    else{
        res.status(403).send({ msg:"Invalid username or password"});
    }
    
})

function auth(req,res,next){
    const token=req.headers.token;
    const decodedToken=jwt.verify(token,JWT_SECRET);
    
    if(decodedToken){
        req.user=decodedToken.username;
        next();
    }
    else{
        res.status(401).send({
            message: "Unauthorized!! please login to access the resources"
        })
    }
}

app.get("/me",auth,(req,res)=>{
    founduser=users.find(u=>{if(u.username==req.user){
        return true;
    }else{return false;}})

    if(founduser){
        res.json({
            username:founduser.username,
            password:founduser.password
        })
    }
    else{
        res.json({
            msg:"Invalid Token"
        })
    }
})


app.listen(3000);