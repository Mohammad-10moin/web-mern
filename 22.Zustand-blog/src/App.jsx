import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <Counter/>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0)

  return(
    <div>
      <CurrentCount count={count}/>
      <br />
      <div className='flex'>
        <Increase setCount={setCount}/>
        <Decrease setCount={setCount}/>
      </div>
    </div>
  )
}


function CurrentCount({count}){
  return(
    <div className='text-8xl'>
      {count}
    </div>
  )
}

function Decrease({setCount}){
  return(
    <div className='m-3'>
      <button onClick={()=>{setCount(c=>c-1)}}>Decrease Count</button>
    </div>
  )
}

function Increase({setCount}){
  return(
    <div className='m-3'>
      <button onClick={()=>{setCount(c=>c+1)}}>Increase Count</button>
    </div>
  )
}
export default App
