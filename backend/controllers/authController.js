// backend/controllers/authController.js
import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import { OAuth2Client } from "google-auth-library";

// Manual Signup/Login
export const manualAuth = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      // Login
      if (!user.password) {
        return res.status(400).json({ message: "Please login via your social provider" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    } else {
      // Signup
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await User.create({
        email,
        firstName,
        lastName,
        password: hashedPassword,
        provider: "manual"
      });
    }

    const token = generateToken(user);
    res.json({ jwt: token, user });
  } catch (error) {
    console.error("Manual auth error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Google OAuth
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    let user = await User.findOne({ email: payload.email });

    if (!user) {
      user = await User.create({
        email: payload.email,
        firstName: payload.given_name,
        lastName: payload.family_name,
        picture: payload.picture,
        provider: "google"
      });
    }

    const jwtToken = generateToken(user);
    res.json({ jwt: jwtToken, user });
  } catch (error) {
    console.error("Google auth error:", error);
    res.status(400).json({ message: "Google login failed" });
  }
};

// Microsoft OAuth
export const microsoftAuth = async (req, res) => {
  const { accessToken } = req.body;

  try {
    const profileRes = await fetch("https://graph.microsoft.com/v1.0/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const profile = await profileRes.json();

    let user = await User.findOne({ email: profile.mail || profile.userPrincipalName });

    if (!user) {
      user = await User.create({
        email: profile.mail || profile.userPrincipalName,
        firstName: profile.givenName,
        lastName: profile.surname,
        provider: "microsoft"
      });
    }

    const jwtToken = generateToken(user);
    res.json({ jwt: jwtToken, user });
  } catch (error) {
    console.error("Microsoft auth error:", error);
    res.status(400).json({ message: "Microsoft login failed" });
  }
};
