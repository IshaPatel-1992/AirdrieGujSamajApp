import jwt from "jsonwebtoken";

const JWT_SECRET = "d94a8f5c7e31d7f0499acb7df462f1b601f3ab8c2b3e93491afcc89a1e9a4d32";

// Example user payload
const user = {
  id: "12345",
  email: "test@example.com"
};

// ✅ Sign a token
const token = jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });
console.log("Signed JWT:", token);

// ✅ Verify a token
try {
  const decoded = jwt.verify(token, JWT_SECRET);
  console.log("Decoded payload:", decoded);
} catch (err) {
  console.error("Invalid token:", err.message);
}
