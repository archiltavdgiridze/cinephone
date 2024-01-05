import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        {/* <Route path="/about" element={} /> */}
        {/* <Route path="/contact" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
