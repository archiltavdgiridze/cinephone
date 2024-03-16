import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import History from "./components/History/History";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
