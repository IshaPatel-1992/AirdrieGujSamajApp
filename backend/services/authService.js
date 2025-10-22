import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const findOrCreateUser = async ({ email, firstName, lastName, picture, provider }) => {
  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({ email, firstName, lastName, picture, provider });
  }

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { user, jwt: token, isNew: !user };
};
