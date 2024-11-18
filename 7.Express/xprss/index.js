const express= require("express");
const app= express();


const users=[{
    name:'john',
    kidneys:[
    // {
    //     healthy:false
    // },
    {
        healthy:true
    }]
}];

app.use(express.json());

app.get("/",(req,res)=>{
    const jk=users[0].kidneys;
    const njk=jk.length;
    const hjk=jk.filter(function(jk){
        if (jk.healthy===true){
            return jk;
        }
    }).length;
    const uhjk=njk-hjk;
    res.json({
        jk,
        njk,
        hjk,
        uhjk
    })
})

app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"done"
    })
})

app.put("/",function(req,res){
    const jk=users[0].kidneys;
    jk.filter((jk)=>{
        if(jk.healthy===false){
            jk.healthy=true;
        }
        return jk;
    })
    res.json({
        update:"Done!"
    })
})

app.delete("/",function(req,res){
    const jk=users[0].kidneys;
    if(jk.filter((jk)=>{
        return jk.healthy===false;
    }).length<=0){
        res.status(411).json({
            msg:"you have no bad kidneys"
        })
    }
    else{
        const finaljk=jk.filter((jk)=>{
            return jk.healthy===true;
        })
        users[0].kidneys=finaljk;
        res.json({
            msg:"Deleted all the unhealthy kidneys"
        });
    }
})

app.listen(3000);