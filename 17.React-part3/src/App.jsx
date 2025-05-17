import { useState } from 'react'

function App() {

  return (
    <div>
      <Light/>
    </div>
  )
}

function Light(){
  const [bulbon,setbulbon]=useState(true);
  return(
    <div>
      <LightOn bulbon={bulbon}/>
      <LightSwitch setbulbon={setbulbon}/>
    </div>
  )
}

function LightOn({bulbon}){
  return(
    <div>
      {bulbon ? "bulbOn": "bulbOff"}
    </div>
  )
}

function LightSwitch({setbulbon}){
  return(
    <button onClick={()=>{
      setbulbon(current=>!current)
    }}>Toggle</button>
  )
}

// Here by rolling up the state and passing the state variable as props to the children we can utilize the state variables inside the children by placing them in the parent
export default App
