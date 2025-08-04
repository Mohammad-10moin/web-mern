// let x: number =1;

// console.log(x);

function greet(name:string) {
    console.log("Good evening "+name);
}

greet("Moin");

function sum(x:number, y:number){
    console.log("sum = "+ (x+y))
}

sum(1,2);

let user1 :{
    firstname: string,
    lastname: string,
    age:number
}={
    firstname: "Mohammad",
    lastname: "Moeenuddin",
    age:21
}

function greeting(user:{
    firstname: string,
    lastname: string,
    age:number
}) {
    console.log("Hello "+ user.lastname);
}


greeting(user1)


interface details {
    firstname: string,
    lastname: string,
    age:number
}


let user2:details={
    firstname: "Mohammad",
    lastname: "Moeenuddin",
    age:21
}

function hello(user:details) {
    console.log("Hello "+ user.lastname);
}

hello(user2);