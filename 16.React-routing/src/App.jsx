import { BrowserRouter,Routes,Route, Link } from "react-router-dom"

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
  return(
    <div>
      The Blogs component 
    </div>
  )
}


export default App
