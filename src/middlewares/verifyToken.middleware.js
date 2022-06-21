import { verify } from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  return verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: { name: "JsonWebTokenError", message: "jwt malformed" },
      });
    }

    req.decoded = decoded;

    next();
  });
};

export default verifyToken;
