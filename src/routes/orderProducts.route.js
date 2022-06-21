import { Router } from "express";
import { orderProductsController } from "../controllers";
import { productIsAvailable } from "../middlewares";
import validateSchema from "../middlewares/validateSchema.middleware";
import verifyToken from "../middlewares/verifyToken.middleware";
import { createOrderProductSchema } from "../schemas";
const orderProductsRouter = Router();

orderProductsRouter.post(
  "/:id",
  validateSchema(createOrderProductSchema),
  verifyToken,
  productIsAvailable,
  orderProductsController.createOrderProduct
);

export default orderProductsRouter;
