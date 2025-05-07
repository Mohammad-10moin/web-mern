import { useState } from "react"
import { PostComponent } from "./Post"
import { useEffect } from "react";

function App() {
  
  const [currentTab,SetcurrentTab]=useState(1)
  
// here we can see that the values(ie 1) inside the div(todo 1) can be directly given to useState hook instead of using document.getElementById

  const [tabdata,Settabdata]=useState({})

  const [loading,Setloading]=useState(false);

  useEffect(()=>{
    Setloading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
    .then(async res =>{
      const json=await res.json();
      Settabdata(json);
      Setloading(false);
    })
  },[currentTab])

  return (
      <div style={{backgroundColor:"#dfe6e9",height:"100%",marginTop:30 }}>
        <div>
        <button onClick={()=>{
          SetcurrentTab(1)
        }}  style={{color: currentTab==1? "red":"black"}}>todo 1</button>
        <button onClick={()=>{
          SetcurrentTab(2)
        }}  style={{color: currentTab==2? "red":"black"}}>todo 2</button>
        <button onClick={()=>{
          SetcurrentTab(3)
        }}  style={{color: currentTab==3? "red":"black"}}>todo 3</button>
        <button onClick={()=>{
          SetcurrentTab(4)
        }}  style={{color: currentTab==4? "red":"black"}}>todo 4</button>
        </div>
        {loading ? "Loading...":tabdata.title}
      </div>
  )
}






















  // const [count,setcount]=useState(0);

  // function inc(){
  //   setcount(count+1)
  // }

  // useEffect(()=>{
  //   const interval = setInterval(() => {
  //     setcount(prev=>prev+1)
  //   }, 1000);

  //   return()=>{clearInterval(interval)}
  // },[])



{/* <div> <button onClick={inc}>increase count</button></div> */}
          {/* <div style={{backgroundColor:"red",color:"black",width:20,height:20,border:"1px solid black", borderRadius:20,display:"flex",justifyContent:"center"}}>
            {count}
          </div>   */}

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
