import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";
import { Routes, Route, Link } from "react-router-dom";
import Arenda from "./Arenda";
import Login from "./Login";
import "./App.css";
import Contact from "./Contact";
import Buy from "./Buy";
import { useState } from "react";
function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"))

  return (
    <div className="App">
      <Navbar />
        
      <Routes>
        <Route path="/" element={<Section isAuth={isAuth}/>} />
        <Route path="/arenda" element={<Arenda />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
