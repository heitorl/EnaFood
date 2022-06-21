import { Router } from "express";
import { productController } from "../controllers";
import validateSchema from "../middlewares/validateSchema.middleware";
import verifyToken from "../middlewares/verifyToken.middleware";
import { createProductsSchema } from "../schemas";
const productRouter = Router();

productRouter.post(
  "/register/:id",
  validateSchema(createProductsSchema),
  verifyToken,
  productController.createProduct
);

productRouter.get("/:id", productController.getProduct);
export default productRouter;
