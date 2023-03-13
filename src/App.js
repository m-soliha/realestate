import Navbar from "./Navbar";
import Section from "./Section";
import { Routes, Route } from "react-router-dom";
import Arenda from "./Arenda";
import Login from "./Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/arenda" element={<Arenda />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
