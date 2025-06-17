
import './App.css'
import { useCountStore } from './store'

function App() {
  console.log("app rendering");
  // const count= useCountStore((state)=>state.count);
  // const increase =useCountStore((state)=>state.increment);
  return (
    <div>
      <Counter/>
      <Buttons/>
    </div>
  )
}

function Counter(){
  console.log("counter rendering");
  const count= useCountStore((state)=>state.count);
  return(
    <div>
      {count}
    </div>
  )
}

function Buttons(){
  console.log("Buttons rendering");
const increase =useCountStore((state)=>state.increment);
  return (
    <div className='flex'>
      <div className='m-3'><button onClick={increase}>Increase</button></div>
      <div className='m-3'><button onClick={useCountStore((state)=>state.decrement)}>Decrease</button></div>
      <div className='m-3'><button onClick={useCountStore((state)=>state.AsyncIncrement)}>Ainc</button></div>
    </div>
  )
}
export default App
