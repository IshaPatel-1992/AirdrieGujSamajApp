import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import MembershipInfo from "./pages/MembershipInfo";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/about" element={<About />} />  
        <Route path="/sponsors" element={<Sponsors />} />  
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membershipinfo" element={<MembershipInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}
