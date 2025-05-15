import { useRef, useState,useEffect } from "react"
import { BrowserRouter,Routes,Route, Link, useNavigate } from "react-router-dom"


function Chat() {
  const [messages, setMessages] = useState(["Hello!", "How are you?"]);
  const chatBoxRef = useRef(null);
  const [newMsgCount,setnewMsgCount]=useState(0);
  // Function to simulate adding new messages
  const addMessage = () => {
    setnewMsgCount(count=>count+1);
    setMessages((prevMessages) => [...prevMessages, "New message!".concat(newMsgCount)]);
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "50px", overflowY: "scroll", border: "1px solid black" }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}


function App() {
// Let's build a stopwatch to understand the use of useRef

const [clock, setclock]=useState(0);
// const [storeclock,setstoreclock]=useState();
const storeclock=useRef();

function startwatch(){
  const watch= setInterval(()=>{
    setclock(clock=>clock+1); 
  },1000);
  storeclock.current=watch;
  // setstoreclock(watch)
  // Here using setstoreclock is again re-rendering even if it is not shown in app component
}

function stopwatch(){
  console.log(storeclock.current);
  clearInterval(storeclock.current);
}
  return (
    <div>
      <Chat/>
        {/* {clock}
        <br />
        <button onClick={startwatch}>Start</button>
        <button onClick={stopwatch}>Stop</button> */}
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
