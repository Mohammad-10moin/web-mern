const express= require("express");
const app= express();

//Lets create a voting system that uses middleware

function canvote(req,res,next){
    const age=req.query.age;
    if(age>=18){
        next();
    }
    else if(age<18){
        res.json({
            msg:"you can't vote yet"
        })
    }
    else{
        res.json({
            msg:"enter your age"
        })
    }
}
app.get("/",canvote,function(request, response){

    response.json({msg:"vote request sent and you can successfully vote"});
})

app.listen(3000);