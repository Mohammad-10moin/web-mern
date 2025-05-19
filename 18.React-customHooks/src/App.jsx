import { useEffect, useState,useRef, useCallback} from 'react'








// Now let's understand useDebounce custom hook 


function useDebounce(funcName,delay){
  const ref=useRef();
  function debouncedFunction() {
      clearTimeout(ref.current);
      ref.current=setTimeout(funcName,delay);
  }
  return debouncedFunction
}


function useDebounce1(func, delay) {
  const timerRef = useRef();

  // Return a debounced function
  return useCallback((...args) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  }, [func, delay]);
}



function App() {

  async function backendCall(){
      const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
      const jsondata=await response.json()
      console.log(JSON.stringify(jsondata));
  }

  function call(){
    console.log("calling backend");
  }
  const debouncedata=useDebounce(backendCall,300);

  return (
  <div>
    <input type="text" onChange={debouncedata}/>

  </div>

  )
}















  // const [count,setcount]=useState(0);
  // const prev=usePrev(count);


    {/* <b>current value {count}</b>
    <br />
    <button onClick={()=>{setcount(count+1)}}>add</button>
    <br />
    <b>The previous value is {prev}</b> */}


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
