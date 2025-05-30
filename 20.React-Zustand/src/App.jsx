
import './App.css'
import { useCountStore } from './store'

function App() {

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
  const count= useCountStore((state)=>state.count);
  return(
    <div>
      {count}
    </div>
  )
}

function Buttons(){
const increase =useCountStore((state)=>state.increment);
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <br />
      <button onClick={useCountStore((state)=>state.decrement)}>Decrease</button>
    </div>
  )
}
export default App
