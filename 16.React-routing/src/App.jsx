import { BrowserRouter,Routes,Route, Link, useNavigate } from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        |
        <Link to="/blogs">Blogs</Link>
        <Routes>

          <Route index element={<Home />} />
  {/* Here the index indicate the / route i.e. path= / and element is Home component */}

          <Route path="blogs" element={<Blogs />} />
  {/* Here the path indicates different types of Routes and element indicates different component to render when we go to   particular route */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Home(){
  return(
    <div>
      The Home component 
    </div>
  )
}

function Blogs(){
  // Let's understand useNavigate hook to navigate to a particular route
  const navigate=useNavigate();
  return(
    <div>
      The Blogs component 
      <button onClick={()=>navigate("/")}>Go to Home</button>
    </div>
  )
}


export default App
