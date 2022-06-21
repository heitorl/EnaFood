import { User } from "../models";

const verifyUserExists = async (req, res, next) => {
  const foundUser = await User.findOne({
    email: req.body.email,
  });

  if (foundUser) {
    return res.status(409).json({ error: "email already exists." });
  }

  return next();
};

export default verifyUserExists;
