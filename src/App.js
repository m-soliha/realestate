import Navbar from "./Navbar";
import Section from "./Section";
import { Routes, Route } from "react-router-dom";
import Arenda from "./Arenda";
import Login from "./Login";
import Contact from "./Contact";
import Buy from "./Buy";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/section" element={<Section />} />
        <Route path="/arenda" element={<Arenda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </div>
  );
}

export default App;
