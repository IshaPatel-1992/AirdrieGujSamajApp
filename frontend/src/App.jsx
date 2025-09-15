import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


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
import MembershipFormNew from "./pages/MembershipFormNew";

function Login() {
  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    // Decode Google token (for debug / optional use)
    const userInfo = jwtDecode(token);
    console.log("Google user:", userInfo);

    // Send Google token to backend
    const res = await fetch("http://localhost:5000/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const data = await res.json();
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      alert("Login successful!");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log("Login Failed")}
      />
    </div>
  );
}

export default function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
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
          <Route path="/membershipformnew" element={<MembershipFormNew />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
}
