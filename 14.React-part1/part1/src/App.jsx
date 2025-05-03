
function App() {
  return (
    <div style={{backgroundColor:"#dfe6e9",height:"100vh",display:"flex",justifyContent:"center"}}>
      <div style={{alignItems:"center"}}>
        <div>
          <PostComponent/>
        </div>
        <div>
          <PostComponent/>
        </div>
        <div>
          <PostComponent/>
        </div>
      </div>
    </div>
  )
}


function PostComponent(){
  return(
    <div style={{height:300,width:480,border:"1px solid grey",borderRadius:8,backgroundColor:"white",marginBottom:10}}>
      <div style={{margin:15}}>
        <div style={{display:"flex"}}>
          <img src="cake.jpg" style={{ height:50,width:50,borderRadius:50,border:"1px solid grey"}}/>
          <div style={{marginLeft:15}}>
            <b>Careers.dev</b>
            <div>12,345 followers</div>
            <div>15m</div>
          </div>
        </div>
        <br />
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nesciunt similique laudantium debitis, modi perspiciatis   tempora quo ad id nam, deserunt aut quis explicabo sapiente sunt, fugit officiis iste. Provident?</div>
      </div>
    </div>
  )
}





export default App
