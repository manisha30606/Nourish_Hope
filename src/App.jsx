import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './index.css'
import Home from "./Router/Home";
import About from "./Router/About";
import Donate from "./Router/Donate";
import Join from "./Router/Join";
import Contact from "./Router/Contact"
;function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
