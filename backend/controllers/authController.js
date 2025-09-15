import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// @desc   Register new member manually
// @route  POST /api/auth/register
// @access Public
export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // 1. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 2. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Create new user
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      authProvider: "manual",
      membershipStatus: "pending", // Admin can approve later if needed
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        membershipStatus: user.membershipStatus,
        token: generateToken(user._id), // JWT token
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
