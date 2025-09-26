const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const { OAuth2Client } = require("google-auth-library");

// Manual Signup/Login

exports.manualAuth = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    // Login
    if (!user.password) return res.status(400).json({ message: "Please login via your social provider" });

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
};

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google OAuth
exports.googleAuth = async (req, res) => {
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
    res.status(400).json({ message: "Google login failed" });
  }
};

// Additional OAuth providers (Microsoft, Apple) can be implemented similarly
exports.microsoftAuth = async (req, res) => {
  const { accessToken } = req.body;

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
};
