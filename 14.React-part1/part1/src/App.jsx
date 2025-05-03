
function App() {
  return (
    <div style={{backgroundColor:"#dfe6e9",height:"100%" ,display:"flex",justifyContent:"center"}}>
      <div style={{alignItems:"center"}}>
        <div>
          <PostComponent
            name={"CakeBuddy"}
            followerCount={"12,345"}
            time={"10m ago"}
            image={"/cake.jpg"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, tenetur nesciunt iste, dolores enim   incidunt assumenda facere mollitia asperiores rerum adipisci explicabo natus, corrupti ipsum eveniet saepe! Vel,  officia aspernatur!"}
          />
        </div>
        <div>
          <PostComponent
            name={"apple"}
            followerCount={"12,65,4321"}
            time={"1m ago"}
            image={"/cake.jpg"}
            description={"Congrats you have been selected !!!                     Lorem ipsum dolor sit amet consecteadipisicing elit. Ullam, tenetur nesciunt iste, dolores enim incidunt assumenda facere mollitia asperiorerum adipisci explicabo natus, corrupti ipsum eveniet saepe! Vel, officia aspernatur!"}
          />
        </div>
        <div>
        <PostComponent
            name={"VsCode"}
            followerCount={"4,321"}
            time={"3m ago"}
            image={"/cake.jpg"}
            description={"Let's code it now !!!                     Lorem ipsum dolor sit amet consecteadipisicing elit. Ullam, tenetur nesciunt iste, dolores enim incidunt assumenda facere mollitia asperiorerum adipisci explicabo natus, corrupti ipsum eveniet saepe! Vel, officia aspernatur!"}
          />
        </div>
      </div>
    </div>
  )
}


function PostComponent({name,followerCount,time,image,description}){
  return(
    <div style={{height:300,width:480,border:"1px solid grey",borderRadius:8,backgroundColor:"white",marginBottom:10}}>
      <div style={{margin:15}}>
        <div style={{display:"flex"}}>
          <img src={image} style={{ height:50,width:50,borderRadius:50,border:"1px solid grey"}}/>
          <div style={{marginLeft:15}}>
            <b>{name}</b>
            <div>{followerCount} followers</div>
            <div>{time}</div>
          </div>
        </div>
        <br />
        <div>{description}</div>
      </div>
    </div>
  )
}





export default App
