const express= require("express");
const axios=require("axios");

const app=express();

/*app.get("/",(req,res)=>{
    res.send("simple get request");
})

app.get("/add",(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const ans=a+b;
    res.json({ans});
})

app.get("/multiply",(req,res)=>{
    const a= parseInt(req.query.a);
    const b= parseInt(req.query.b);
    res.json({
        ans:a*b
    });
})


app.get("/divide",(req,res)=>{
    const a= parseInt(req.query.a);
    const b= parseInt(req.query.b);
    res.json({
        ans:a/b
    });
})


app.get("/subtract",(req,res)=>{
    const a= parseInt(req.query.a);
    const b= parseInt(req.query.b);
    res.json({
        ans:a-b
    });
})
*/
async function func() {
    const lf = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const ans= await lf.json();
    console.log(ans);
}
func();


async function func1() {
    const lf = await axios("https://jsonplaceholder.typicode.com/posts/1");
    console.log(lf);
}
func1();
// fetch(resource)
// fetch(resource, options)
// if options are not given if behaves as simple get request 
// which acts as a client and requests the resource from the server
// and returns a promise


// const lf = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const ans=lf.json();
// console.log(ans);

// app.listen(3000);
