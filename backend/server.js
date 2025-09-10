import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { jwtDecode } from 'jwt-decode';
import { OAuth2Client } from "google-auth-library";


const app = express();

// Allow requests from your frontend
app.use(cors({
  origin: "http://localhost:3000", // React app URL
  credentials: true, // allow cookies if needed
}));

app.use(bodyParser.json());


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const JWT_SECRET = process.env.JWT_SECRET;

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

// Endpoint for Google Login
app.post("/auth/google", async (req, res) => {
  const { token } = req.body;

  try {
    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload(); // {sub, email, name, picture...}
    console.log("Google payload:", payload);

    // Create our own JWT
    const customJwt = jwt.sign(
      { email: payload.email, name: payload.name },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ jwt: customJwt, user: payload });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid Google token" });
  }
});

// Example protected route
app.get("/profile", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    res.json({ message: "Protected data", user });
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
