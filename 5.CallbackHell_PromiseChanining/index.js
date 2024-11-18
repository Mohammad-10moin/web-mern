
// call hi after 1sec 
// call hello after 3 sec after hi is called 
// call hi there after 5sec after hello is called

// setTimeout(()=>{
//     console.log('hi');
//     setTimeout(()=>{
//         console.log('hello');
//         setTimeout(()=>{
//             console.log('hi there');
//         },5000);
//     },3000);
// },1000)

// the above calling of callbacks inside a callback is called as callback hell
// to avoid this we use promises 
// let's see its implementation

function setTimeoutPromisified(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time);
    })
}

// setTimeoutPromisified(1000).then(()=>{
//     console.log("Hie");
//     setTimeoutPromisified(3000).then(()=>{
//         console.log("Hello");
//         setTimeoutPromisified(5000).then(()=>{
//             console.log("Hi there");
//         })
//     })
// })

// but this is also similar to callback hell 
// so we use different syntax

// setTimeoutPromisified(1000).then(()=>{
//     console.log("Hie");
//     return setTimeoutPromisified(3000)
// }).then(()=>{
//     console.log("Hello");
//     return setTimeoutPromisified(5000)
// }).then(()=>{
//     console.log("Hi there");
// })

// lets now use async and await syntactic sugar

// async function greet() {
//     await setTimeoutPromisified(1000);
//     console.log('Hi');
//     await setTimeoutPromisified(3000);
//     console.log('Hello');
//     await setTimeoutPromisified(5000);
//     console.log('Hi there');
// }
// greet();

// the async await also implements the promises behind but appears more cleaner.