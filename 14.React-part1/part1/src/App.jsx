
function App() {
  return (
    <>
    <PostComponent/>
    {/* Hot Module Replacement : if we make any changes in our code then it automatically appears in frontend  */}
      <div>
        Hello Moin 10
      </div>
      {/* npm run dev -- we are running a development server */}
    </>
  )
}


function PostComponent(){
  return(
    <>
      <div style={{ width:"500px",height:"550px" , backgroundColor:"ghostwhite", display:"flex" }}>
          <img src="cake.jpg" alt="" style={{width:50,height:50,border:"1px solid grey",  borderRadius:50}}/>
          <div>
            <div style={{display:"flex"}}>
              <p style={{fontSize:18,fontWeight:600, marginLeft:5}}>Mohammad </p>
              <p style={{fontSize:12, color:"grey", alignContent:"center",marginLeft:2}}> . Following</p>
            </div>
              <p style={{fontSize:12, color:"grey"}}>Software Engineer at Google</p>
          </div>
      </div>
    </>
  )
}





export default App
