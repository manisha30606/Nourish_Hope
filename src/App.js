import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from"./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Join from "./components/Help.js";
import Donate from "./components/Donate";

function App() {
  return (
  
  <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ="/join" element ={<Join/>}/>
          <Route path ="/donate" element ={<Donate/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
