import { useState } from "react"
import { PostComponent } from "./Post"
import { useEffect } from "react";

function App() {
  
  const [count,setcount]=useState(0);

  function inc(){
    setcount(count+1)
  }

  useEffect(()=>{
    const interval = setInterval(() => {
      setcount(prev=>prev+1)
    }, 1000);

    return()=>{clearInterval(interval)}
  },[])
  

  return (
      <div style={{backgroundColor:"#dfe6e9",height:"100%",marginTop:30 }}>
        {/* <div> <button onClick={inc}>increase count</button></div> */}
          <div style={{backgroundColor:"red",color:"black",width:20,height:20,border:"1px solid black", borderRadius:20,display:"flex",justifyContent:"center"}}>
            {count}
          </div>  
      </div>
  )
}






        {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> */}
        {/* </div> */}

        {/* <div> <button onClick={addpost}>Add Post</button></div> */}


  // const [posts,setpost]=useState([])

  // const postComponents=posts.map(post=><PostComponent
  //   name={post.name}
  //   subtitle={post.subtitle}
  //   time={post.time}
  //   image={post.image}
  //   description={post.description}
  //   />
  // )

  // function addpost(){
  //   setpost([...posts,{
  //     name:"CakeBuddy",
  //     subtitle:"12,345 followers",
  //     time:"12m ago",
  //     image:"/cake.jpg",
  //     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,   tenetur       nesciunt iste, dolores enim   incidunt assumenda facere mollitia  asperiores rerum       adipisci explicabo natus, corrupti ipsum eveniet saepe!   Vel,  officia aspernatur!",
  //   }])
  // }

export default App
