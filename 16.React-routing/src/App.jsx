import { BrowserRouter,Routes,Route, Link, useNavigate } from "react-router-dom"

function App() {
// Here let's write code to focus the first input box onclicking submit
  return (
    <div>
      SignUp
      <input id="one" type="text" />
      <input type="text" />
      <button onClick={()=>{
        document.getElementById("one").focus()
      }}>submit</button>
    </div>
  )
}

















  //     <BrowserRouter>
  //       <Link to="/">Home</Link>
  //       |
  //       <Link to="/blogs">Blogs</Link>
  //       <Routes>

  //         <Route index element={<Home />} />
  // {/* Here the index indicate the / route i.e. path= / and element is Home component */}

  //         <Route path="blogs" element={<Blogs />} />
  // {/* Here the path indicates different types of Routes and element indicates different component to render when we go to   particular route */}

  //         <Route path="*" element={<Error404 />} />

  //       </Routes>
      // </BrowserRouter>

function Home(){
  return(
    <div>
      The Home component 
    </div>
  )
}

function Blogs(){
  return(
    <div>
      The Blogs component 
    </div>
  )
}

function Error404(){
  // Let's understand useNavigate hook to navigate to a particular route
  const navigate=useNavigate();
  return(
    <div>
      SOrrY paGe NoTFoUnD 
      <br />
      The Error404 component 
      <button onClick={()=>navigate("/")}>Go to Home</button>
    </div>
  )
}

export default App
