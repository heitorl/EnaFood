import addressRouter from "./address.route";
import userRouter from "./user.route";
import restaurantRouter from "./restaurant.route";
import productRouter from "./product.route";
import orderProductsRouter from "./orderProducts.route";

const routers = (app) => {
  app.use("/api/users", userRouter);
  app.use("/api/address", addressRouter);
  app.use("/api/restaurant", restaurantRouter);
  app.use("/api/products", productRouter);
  app.use("/api/orderProduct", orderProductsRouter);
};

export default routers;
