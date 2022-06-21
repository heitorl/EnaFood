import { Router } from "express";
import { userController } from "../controllers";
import { verifyUserExists } from "../middlewares";
import validateSchema from "../middlewares/validateSchema.middleware";
import { createUserSchema } from "../schemas";
const userRouter = Router();

userRouter.post(
  "/register",
  validateSchema(createUserSchema),
  verifyUserExists,
  userController.createUser
);
userRouter.post("/login", userController.userLogin);
export default userRouter;
