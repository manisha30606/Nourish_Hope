import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import './index.css'
import Home from "./Router/Home";
import About from "./Router/About";
import Donate from "./Router/Donate";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;
