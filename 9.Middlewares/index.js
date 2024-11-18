const express= require("express");
// const cors= require("cors");

const app= express();

// app.use(cors());
app.use(express.json());

// To host both the frontend and backend on the same domain either use next.js or use the below code

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/sum",(req,res)=>{
    const a= parseInt(req.body.a);
    const b= parseInt(req.body.b);
    res.json({
        ans:a+b
    })
})

app.listen(3000);
