import './App.css'
import { useCounter } from './store'

function App() {
  console.log("app rendering");
  return (
    <div>
      <CurrentCount/>
      <Buttons/>
      {/* <br />
      <div className='flex'>
        <Increase/>
        <Decrease/>
      </div> */}

    </div>
  )
}


function CurrentCount(){
  console.log("current component rendering");
  const currcount=useCounter((state)=>state.count);
  return(
    <div className='text-8xl'>
      {currcount}
    </div>
  )
}

function Buttons(){
  console.log("Buttons rendering");
const increase =useCounter((state)=>state.increment);
  return (
    <div className='flex'>
      <div className='m-3'><button onClick={increase}>Increase</button></div>
      <div className='m-3'><button onClick={useCounter((state)=>state.decrement)}>Decrease</button></div>
    </div>
  )
}
// function Decrease(){
//   console.log("Decrease component rendering");
//   const decrease=useCounter((state)=>state.decrement)
//   return(
//     <div className='m-3'>
//       <button onClick={decrease}>Decrease Count</button>
//     </div>
//   )
// }

// function Increase(){
//   console.log("Increase component rendering");
//   const increase=useCounter((state)=>state.increment)
//   return(
//     <div className='m-3'>
//       <button onClick={increase}>Increase Count</button>
//     </div>
//   )
// }
export default App


























/* 
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
        <Buttons setCount={setCount}/>
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


function Buttons({setCount}){
  return(
    <div className= 'flex'>
      <div className='m-3'>
        <button onClick={()=>{setCount(c=>c+1)}}>Increase Count</button>
      </div>
      <div className='m-3'>
        <button onClick={()=>{setCount(c=>c-1)}}>Decrease Count</button>
      </div>
    </div>
  )
}
export default App

*/