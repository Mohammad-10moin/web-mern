import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    </div>
  )
}

function Light(){
  return(
    <div>
      <LightOn/>
      <LightSwitch/>
    </div>
  )
}

function LightOn(){
  const [bulbon,setbulbon]=useState(true);
  return(
    <div>
      {bulbon ? "bulbOn": "bulbOff"}
    </div>
  )
}

function LightSwitch(){
  return(
    <button>Toggle</button>
  )
}

// Here we can't get the setbulbon to toggle the state of the bulb inside the LightSwitch component --so we use rolling up the state --it's an unoptimal way 
export default App
