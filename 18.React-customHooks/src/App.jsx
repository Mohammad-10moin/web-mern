import { useState } from 'react'

function useCounter(){
  const [count, setcount]=useState(0);

  // function increase(){
  //   setcount(c=>c+1);
  // }

  return{
    count:count,
    // increase:increase
    setcount:setcount
  }

}

function App() {
// Let's understand custom hooks 
// The custom hooks use the predefined hooks in them

// Here rather than defining the state variable and function , we can instead use the below one

const {count,setcount}=useCounter();
  return (
  <div>
    {/* <button onClick={increase}>Increase {count}</button> */}
    <button onClick={()=>{setcount(c=>c+1)}}>Increase {count}</button>
  </div>

  )
}

export default App
