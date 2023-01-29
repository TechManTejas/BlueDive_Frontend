import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Waves from "./Components/Waves";
import Home from "./Pages/Home";

function App() {

  const [scrollAmount, setScrollAmount] = useState(0)
  window.addEventListener("scroll", () => setScrollAmount(window.scrollY))

  return (
    <>
      <Router>
        <Navbar scrolled={scrollAmount} />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
