const express= require("express");
const app= express();

let count=0;
function reqCount(req,res,next){
    count=count+1;
    console.log(`
        "method"${req.method},
        "url"${req.hostname},
        "time"${new Date()}`);
    next();
}

app.get("/",reqCount,(req,res)=>{
    res.json({
        msg:count
    });
})


app.post("/",reqCount,(req,res)=>{
    res.json({
        msg:count
    });
})

app.put("/",reqCount,(req,res)=>{
    res.json({
        msg:count
    });
})

app.delete("/",reqCount,(req,res)=>{
    res.json({
        msg:count
    });
})

app.listen(3000);