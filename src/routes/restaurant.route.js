import { Router } from "express";
import { restaurantController } from "../controllers";
import isAdmin from "../middlewares/isAdmin.middleware";
import validateSchema from "../middlewares/validateSchema.middleware";
import verifyToken from "../middlewares/verifyToken.middleware";
import { createRestaurantSchema } from "../schemas";
const restaurantRouter = Router();

restaurantRouter.post(
  "/register",
  validateSchema(createRestaurantSchema),
  verifyToken,
  isAdmin,
  restaurantController.createRestaurant
);

restaurantRouter.get("", restaurantController.getAll);
export default restaurantRouter;
