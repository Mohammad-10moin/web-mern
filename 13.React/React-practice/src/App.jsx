import discord_logo from './assets/discord_logo.png'
import {useState} from 'react'

function App() {
  
  return (
    <div>
        <PostComponent/>
        <ToggleComponent/>
      </div>
  )
}

const styles={width:200,backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1,display:"flex"}

function PostComponent() {
  return (
      <div style={styles}>
          <img src={"https://clipground.com/images/discord-icon-png-20.jpg"} alt="" style={{
            width:50,
            height:50,
            borderRadius:20,
          }}/>
          <div>
            <b>100xDevs</b>
            <div>100k followers</div>
          </div>
      </div>
  )
}

// function Counter(){
//   const [count, setCount] = useState(0)
//   return(
//     <button onClick={() => setCount(count+1)}>Count: {count}</button>
//   )
// }

function ToggleComponent(){
  const [isvisble, setIsVisible] = useState(false)
  return(
    <>
      <button onClick={()=>setIsVisible(!isvisble)}>Toggle</button>
      {isvisble && <div>Visible</div>}
    </>
  )
}
export default App
