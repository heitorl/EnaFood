import { Address, User } from "../models";
import { hash } from "bcrypt";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { serializedCreateUserSchema } from "../schemas";

class UserService {
  createUser = async (req) => {
    req.validated.password = await hash(req.validated.password, 10);

    const user = await new User(req.validated).save();

    return await serializedCreateUserSchema.validate(user, {
      stripUnknown: true,
    });
  };

  userLogin = async (req) => {
    const foundUser = await User.findOne({
      email: req.body.email,
    });

    if (!foundUser) {
      return { status: 400, message: { message: "Invalid credentials." } };
    }

    if (!(await compare(req.body.password, foundUser.password))) {
      return { status: 400, message: { message: "Invalid credentials." } };
    }

    const token = sign(
      {
        email: foundUser.email,
        _id: foundUser._id,
        isAdmin: foundUser.isAdmin,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.EXPIRES_IN,
      }
    );

    return { status: 200, message: { token } };
  };
}

export default new UserService();
