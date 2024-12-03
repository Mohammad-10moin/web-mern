const express = require('express');
const app= express();

const jwt = require("jsonwebtoken");
const JWT_SECRET="Moin10";

app.use(express.json());

const users=[];

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        msg:"your are signed up"
    })
    console.log(users);
})

app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password = req.body.password;

    const founduser= users.find(u=>{
        if(u.username==username && u.password ==password){
            return true;
        }
        return false;
    })
    if(founduser){
        //the sign function encodes the username using the JWT_SECRET key in case of JWT.
        const token=jwt.sign({
            username:username
        },JWT_SECRET);

        res.json({
            token:token
        })
    }else{
        res.status(403).send({ msg:"Invalid username or password"});
    }  
    console.log(users);
})

app.get("/me",(req,res)=>{
    const token = req.headers.token;
    const decodedToken=jwt.verify(token,JWT_SECRET);
//The verify function decodes the token using jwt secret key and verifies the user
    const username=decodedToken.username;

    const founduser=users.find(u=>{if(u.username==username){
        return true;
    }else{return false;}
    });

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
