import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


function Login() {
  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    // Decode for debugging only
    const userInfo = jwtDecode(token);
    console.log("Google user (decoded):", userInfo);

    try {
      const res = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }), // must be { token }
      });

      const data = await res.json();

      if (res.ok && data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("✅ Login successful!");
      } else {
        alert("❌ Login failed: " + data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("❌ Login error, check console");
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

export default Login;
