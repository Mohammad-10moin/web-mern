import { useState } from "react"
import { PostComponent } from "./Post"

function App() {
  return (
      <div style={{backgroundColor:"#dfe6e9",height:"100%" ,display:"flex",justifyContent:"center"}}>
        <div> <button onClick={()=>{

        }}>Add Post</button></div>
        
        <div style={{alignItems:"center"}}>
          <div>
            <PostComponent
              name={"CakeBuddy"}
              subtitle={"12,345 followers"}
              image={"/cake.jpg"}
              description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,   tenetur       nesciunt iste, dolores enim   incidunt assumenda facere mollitia  asperiores rerum       adipisci explicabo natus, corrupti ipsum eveniet saepe!   Vel,  officia aspernatur!"}
            />
          </div>  
        </div>
      </div>
  )
}

export default App
