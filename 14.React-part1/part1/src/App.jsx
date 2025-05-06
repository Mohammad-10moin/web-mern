import { useState } from "react"
import { PostComponent } from "./Post"

function App() {
  
  const [posts,setpost]=useState([])

  const postComponents=posts.map(post=><PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
    />
  )

  function addpost(){
    setpost([...posts,{
      name:"CakeBuddy",
      subtitle:"12,345 followers",
      time:"12m ago",
      image:"/cake.jpg",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,   tenetur       nesciunt iste, dolores enim   incidunt assumenda facere mollitia  asperiores rerum       adipisci explicabo natus, corrupti ipsum eveniet saepe!   Vel,  officia aspernatur!",
    }])
  }

  return (
      <div style={{backgroundColor:"#dfe6e9",height:"100%" }}>

        <div> <button onClick={addpost}>Add Post</button></div>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div>
            {postComponents}
          </div>  
        </div>
      </div>
  )
}

export default App
