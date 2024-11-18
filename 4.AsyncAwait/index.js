/*const fs = require("fs");
const content=fs.readFileSync("problemSIH.txt","utf-8");
console.log(content);

console.log("Hello");

function timeout(){
    console.log("timeout called");
}
setTimeout(timeout, 1000);

for (let i = 0; i < 100; i++) {
    i+1;
}

console.log("expensive operation done");

class User{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    details(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
    changeDetails(nn,na){
        console.log(`My name is ${nn} and my age is ${na}`);
    }
}

const moin=new User("Moin",20);
moin.details();
moin.changeDetails("Moinuddin",21);
*/

/*
const date= new Date();
console.log(date.toLocaleTimeString());

const map = new Map();
map.set("name","Moin");
map.set("age",20);
console.log(map);
console.log(map.get("name"));
*/

function getname(){
    console.log('Moin');
}

// setTimeout(getname,5000);

/*
function setTimeoutPromisified(ms){
    const p= new Promise(resolve => setTimeout(resolve,ms));
    return p;
}
let p=setTimeoutPromisified(3000);
if(p){
    p.then(getname);
}else{
    p.reject(`error occured`);
}
*/
// setTimeoutPromisified(3000).then(getname);
