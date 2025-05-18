import { useEffect, useState } from 'react'


function useFetch(url){
  const [data,setdata]=useState({});

  async function getdata(){
    const response=await fetch(url);
    const jsonData=await response.json();
    setdata(jsonData);
  }

  useEffect(()=>{
    getdata();
  },[url])

  return{
    data
  }
}

function App() {
  const [count,setcount]=useState(1);
  const {data}=useFetch("https://jsonplaceholder.typicode.com/todos/"+count)
  return (
  <div>
    <button onClick={()=>{setcount(c=>c+1)}}>Todo number{count}</button>
    <br />
    {JSON.stringify(data)}
  </div>

  )
}











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
