import { useState } from 'react'

function App() {
// Here now lets understand children in react 
  return (
    <div style={{display:"flex"}}>
      <Card>
        <div style={{ color:"red",fontWeight:600}}>Hi there</div>
      </Card>
      <Card>
        <div>
          Enter you text here:
          <br />
          <input type="text" />
        </div>
      </Card>
    </div>
  )
}

function Card({children}){
  return(
    <div style={{ backgroundColor: 'grey',padding:20,margin:20, border:"1px dashed black",borderRadius:20,}}>{children}</div>
  )
}

export default App
