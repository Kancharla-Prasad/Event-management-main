import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Eventinfo from "./pages/Events/Eventinfo";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventName" element={<Eventinfo />} />
      </Routes>
    </div>
  );
}

export default App;
