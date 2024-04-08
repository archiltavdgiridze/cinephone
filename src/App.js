import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import History from "./components/History/History";
import Gallery from "./components/Gallery/Gallery";
import Submission from "./components/Submission/Submission";
import OurTeam from "./components/OurTeam/OurTeam";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/history" element={<History />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/our_team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
