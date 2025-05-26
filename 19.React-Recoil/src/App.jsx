import { useState } from 'react'


function App() {
  const [count , setcount]=useState(0);
  return (
    <div>
      <Increase setcount={setcount}/>
      <Decrease setcount={setcount}/>
      {count}
    </div>
  )
}

function Increase(setcount){
  return(
    <button onClick={()=>{
      setcount(c=>c+1)
    }}>Increase</button>
  )
}


function Decrease(setcount){
  return(
    <button onClick={()=>{
      setcount(c=>c-1)
    }}>Decrease</button>
  )
}
export default App
