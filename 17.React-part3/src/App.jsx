import { useState } from 'react'

// Now let's understand prop drilling 

function App() {
  const [bulbon,setbulbon]=useState(true);
  return (
    <div>
      <Light bulbon={bulbon} setbulbon={setbulbon}/>
    </div>
  )
}

function Light({bulbon,setbulbon}){
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

// Here in prop drilling all the state variables are defined at the top and passed down using props
//Problem -- Here if only the last child needs the state variable then also it needs to be passed between all the intermediate components 
export default App
