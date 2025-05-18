import { useEffect, useState,useRef } from 'react'



// Now let's understand usePrev custom hook

function usePrev(value){
  const ref=useRef();

  useEffect(()=>{
    ref.current=value
  },[value])

  return ref.current
  // Here we need to know that in React the 
  // 1st the return statement gets executed first and then the useEffect hooks gets called first 
  // and also remember that the first value inside useEffect hook can't be async function.

}

function App() {
  const [count,setcount]=useState(0);
  const prev=usePrev(count);
  return (
  <div>
    <b>current value {count}</b>
    <br />
    <button onClick={()=>{setcount(count+1)}}>add</button>
    <br />
    <b>The previous value is {prev}</b>
  </div>

  )
}





















  // const [count,setcount]=useState(1);
  // const {data}=useFetch("https://jsonplaceholder.typicode.com/todos/"+count)


    {/* <button onClick={()=>{setcount(c=>c+1)}}>Todo number{count}</button>
    <br />
    {JSON.stringify(data)} */}



// function useFetch(url){
//   const [data,setdata]=useState({});

//   async function getdata(){
//     const response=await fetch(url);
//     const jsonData=await response.json();
//     setdata(jsonData);
//   }

//   useEffect(()=>{
//     getdata();
//   },[url])

//   return{
//     data
//   }
// }







// const {count,setcount}=useCounter();

    {/* <button onClick={increase}>Increase {count}</button>
    <button onClick={()=>{setcount(c=>c+1)}}>Increase {count}</button> */}



// function useCounter(){
//   const [count, setcount]=useState(0);

//   // function increase(){
//   //   setcount(c=>c+1);
//   // }

//   return{
//     count:count,
//     // increase:increase
//     setcount:setcount
//   }

// }






export default App
