const fs = require("fs");
const express= require("express");
const path = require("path");
const app = express();

const dirname= "D:\\WEB2\\7.Express";
console.log(path.join(__dirname,'./'));
app.get("/:folder",(req,res)=>{
    const pf=path.join(dirname,req.params.folder);
    console.log(pf);
    
    const contentarr=[];
    fs.readdir(pf,(err,files)=>{
        if (err) {
            console.error(err);
        } else {
            files.forEach(file => {
            contentarr.push(file);});
        }
        console.log(contentarr);
        res.json({contentarr});
    })
})


app.get("/:folder/:filename",(req,res)=>{

    const flnm=req.params.filename;
    const pf=path.join(dirname,req.params.folder);
    fs.readdir(pf,(err,files)=>{
        if (err) {
            console.error(err);
            res.status(404).json({msg:"folder not found"})
        } else if(files.includes(flnm)){
            fs.readFile(flnm,(err,data)=>{
                if(err){
                    console.log(err);
                    res.status(404).json({msg:"file not found"});
                }else{
                    res.send(data);
                }
            })
        }
    })   
})

app.all('*',(req,res)=>{
    res.status(404).send("route not found");
})
app.listen(3000)
