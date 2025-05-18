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
  },[])

  return{
    data
  }
}

function App() {
  const {data}=useFetch("https://jsonplaceholder.typicode.com/todos/1")
  return (
  <div>
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
