import { userService } from "../services";

class UserController {
  createUser = async (req, res) => {
    const user = await userService.createUser(req);

    return res.status(201).json(user);
  };

  userLogin = async (req, res) => {
    const { status, message } = await userService.userLogin(req);

    return res.status(status).json(message);
  };
}

export default new UserController();
