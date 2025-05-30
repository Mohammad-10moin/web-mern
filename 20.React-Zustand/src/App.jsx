
import './App.css'
import { useCountStore } from './store'

function App() {

  const count= useCountStore((state)=>state.count);
  const increase =useCountStore((state)=>state.increment);
  return (
    <div>
      {count}
      <br />
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default App
