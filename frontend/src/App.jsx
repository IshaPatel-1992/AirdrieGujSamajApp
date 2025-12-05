import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ScrollToTop from './components/ui/ScrollToTop';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import MembershipInfo from "./pages/MembershipInfo";
import MembershipFormNew from "./pages/MembershipFormNew";
import Login from "./pages/Login";
import OurTeam from "./components/OurTeam";

export default function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/events" element={<Events />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/membershipinfo" element={<MembershipInfo />} />
          <Route path="/membershipformnew" element={<MembershipFormNew />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ourteam" element={<OurTeam />} />
        </Routes>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
}
