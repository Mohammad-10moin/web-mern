const { count } = require("console");
const fs = require("fs");
// Callback based approach


// Promisified approach
function promiseReadFile(){
    return new Promise((resolve)=>{
        fs.readFile("problemSIH.txt","utf-8",function(err,data){
            resolve(data);
        });
    });
}
// function readFile(resolve){
//     fs.readFile("problemSIH.txt","utf-8",function(err,data){
//         resolve(data);
//     });
// }
// function Callback(data){
//     console.log(data);
// }

const p = promiseReadFile();
p.then((data)=>{
    console.log(data);
});


/*// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

/*
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
*/
/*
let i=0;
setInterval(()=>{
  console.log(i);
  i++;
},1000);
*/
// setInterval(function,time in ms);

// while(true){

//   i++;
// }

