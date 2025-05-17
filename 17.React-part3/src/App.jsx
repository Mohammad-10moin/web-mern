import { createContext, useContext, useState } from 'react'

// Now let's use context api to avoid prop drilling
const BulbContext= createContext();

function App() {
  const [bulbon,setbulbon]=useState(true);
  return (
    <div>
      <BulbContext.Provider value={{
        bulbon:bulbon,
        setbulbon:setbulbon
      }}>
      <Light/>
      </BulbContext.Provider>
    </div>
  )
}

function Light(){
  return(
    <div>
      <LightOn/>
      <LightSwitch />
    </div>
  )
}

function LightOn(){
  const {bulbon}=useContext(BulbContext);
  return(
    <div>
      {bulbon ? "bulbOn": "bulbOff"}
    </div>
  )
}

function LightSwitch(){
  const {setbulbon}=useContext(BulbContext);
  return(
    <button onClick={()=>{
      setbulbon(current=>!current)
    }}>Toggle</button>
  )
}

export default App
