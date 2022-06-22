import { Router } from "express";
import { restaurantController } from "../controllers";
import { isOwner } from "../middlewares";
import validateSchema from "../middlewares/validateSchema.middleware";
import verifyToken from "../middlewares/verifyToken.middleware";
import { createRestaurantSchema } from "../schemas";
const restaurantRouter = Router();

restaurantRouter.post(
  "/register",
  validateSchema(createRestaurantSchema),
  verifyToken,
  isOwner,
  restaurantController.createRestaurant
);

restaurantRouter.get("", restaurantController.getAll);
export default restaurantRouter;
