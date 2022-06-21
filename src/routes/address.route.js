import { Router } from "express";
import { addressController } from "../controllers";
import validateSchema from "../middlewares/validateSchema.middleware";
import verifyToken from "../middlewares/verifyToken.middleware";
import { createAddressSchema } from "../schemas";
const addressRouter = Router();

addressRouter.post(
  "/register",
  validateSchema(createAddressSchema),
  verifyToken,
  addressController.createAddress
);
export default addressRouter;
