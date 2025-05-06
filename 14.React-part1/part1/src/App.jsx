import { useState } from "react"

function App() {
  return (
    <div style={{backgroundColor:"#dfe6e9",height:"100%"}}>
      <ToggleComponent/>
    </div>
  )
}

const ToggleComponent = () =>{
  const [isvisible,Setisvisble]=useState(false);
  
  // this is a state variable using useState hook
  // state variable is the only way to re-render 
  // re-rendering -- the react calls this specific part if there any change in state variable 

  return(
    <div>
      <button onClick={()=>{Setisvisble(!isvisible)}}>
        Toggle Message
      </button>
      {isvisible && <p>This message is conditionally rendered !!! ...</p>}
    </div>
  )
}




























// function PostComponent({name,subtitle,time,image,description}){
//   return(
//     <div style={{height:300,width:480,border:"1px solid grey",borderRadius:8,backgroundColor:"white",marginBottom:10}}>
//       <div style={{margin:15}}>
//         <div style={{display:"flex"}}>
//           <img src={image} style={{ height:50,width:50,borderRadius:50,border:"1px solid grey"}}/>
//           <div style={{marginLeft:15}}>
//             <b>{name}</b>
//             <div>{subtitle}</div>
//             {/* Here if time is not undefined then the following content of the block will get rendered */}
//             {time!=undefined && <div style={{display:"flex"}}>
//               <div>{time}</div>
//               <div>
//                 <img src="https://th.bing.com/th/id/OIP.JFr9QZ7D0XZUBQzYw0GpLwHaHa?rs=1&pid=ImgDetMain" alt="" style={{height:10,   width:10, marginLeft:3}}/>
//               </div>
//             </div>}
//           </div>
//         </div>
//         <br />
//         <div>{description}</div>
//       </div>
//     </div>
//   )
// }

// Let's understand Conditional Rendering
{/* <div style={{backgroundColor:"#dfe6e9",height:"100%" ,display:"flex",justifyContent:"center"}}>
<div style={{alignItems:"center"}}>
  <div>
    <PostComponent
      name={"CakeBuddy"}
      subtitle={"12,345 followers"}
      image={"/cake.jpg"}
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, tenetur nesciunt iste, dolores enim   incidunt assumenda facere mollitia asperiores rerum adipisci explicabo natus, corrupti ipsum eveniet saepe! Vel,  officia aspernatur!"}
    />
  </div>
  <div>
    <PostComponent
      name={"apple"}
      subtitle={"12,654,321 followers"}
      time={"1m ago"}
      image={"/cake.jpg"}
      description={"Congrats you have been selected !!!                     Lorem ipsum dolor sit amet consecteadipisicing elit. Ullam, tenetur nesciunt iste, dolores enim incidunt assumenda facere mollitia asperiorerum adipisci explicabo natus, corrupti ipsum eveniet saepe! Vel, officia aspernatur!"}
    />
  </div>
  <div>
  <PostComponent
      name={"VsCode"}
      subtitle={"4,321 followers"}
      time={"3m ago"}
      image={"/cake.jpg"}
      description={"Let's code it now !!!                     Lorem ipsum dolor sit amet consecteadipisicing elit. Ullam, tenetur nesciunt iste, dolores enim incidunt assumenda facere mollitia asperiorerum adipisci explicabo natus, corrupti ipsum eveniet saepe! Vel, officia aspernatur!"}
    />
  </div>
</div>
</div> */}



export default App
