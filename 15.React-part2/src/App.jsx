import { useState } from 'react'

function App() {
// Now let's understand list and keys 
// whenever we render components inside the list then the list needs to have a unique key 
// react understand based on the key i.e. if the component with key1 goes below and key2 goes up then the react simply swaps them instead of removing both of them and again adding them 
  return (
    <div>
      {[
        <Todo key={1} title={"todo one"} done={false}/>,
        <Todo key={2} title={"todo two"} done={true}/>
      ]}
    </div>
  )
}


function Todo({title,done}){
  return(
    <div>
      {title} --{done? "Done":"not done"}
    </div>
  )
}






      // <Card>
      //   <div style={{ color:"red",fontWeight:600}}>Hi there</div>
      // </Card>
      // <Card>
      //   <div>
      //     Enter you text here:
      //     <br />
      //     <input type="text" />
      //   </div>
      // </Card>



// function Card({children}){
//   return(
//     <div style={{ backgroundColor: 'grey',padding:20,margin:20, border:"1px dashed black",borderRadius:20,}}>{children}</div>
//   )
// }

export default App
