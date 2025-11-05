import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import MembershipInfo from "./pages/MembershipInfo";
import MembershipFormNew from "./pages/MembershipFormNew";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import OurTeam from "./components/OutTeam";

export default function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membershipinfo" element={<MembershipInfo />} />
          <Route path="/membershipformnew" element={<MembershipFormNew />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
}
