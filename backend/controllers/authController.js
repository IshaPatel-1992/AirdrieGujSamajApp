import { OAuth2Client } from "google-auth-library";
import { findOrCreateUser } from "../services/authService.js";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ message: "Token missing" });

    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { user, jwt, isNew } = await findOrCreateUser({
      email: payload.email,
      firstName: payload.given_name,
      lastName: payload.family_name,
      picture: payload.picture,
      provider: "google",
    });

    res.json({ jwt, user, isNew });
  } catch (err) {
    console.error("Google auth error:", err);
    res.status(400).json({ message: "Google login failed" });
  }
};
