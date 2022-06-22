import res from "express/lib/response";
import { OrderProducts, Orders, Products, User } from "../models";
import { serializedOrderProductSchema } from "../schemas";

class OrderProductService {
  createOrderProduct = async (req) => {
    const products = await Products.findOne({
      _id: req.params.id,
    });

    const orderProducts = await OrderProducts.create({
      ...req.validated,
      product: products._id,
    });

    const user = await User.findOne({
      _id: req.decoded._id,
    });

    const totalPrice = {
      totalPrice: orderProducts.quantity * products.price,
    };

    const order = await Orders.create({
      ...totalPrice,
      user,
      orderProducts,
    });

    order.quantity = orderProducts.quantity;
    order.price = products.price;
    order.save();
    console.log(order);

    orderProducts.order = order._id;
    orderProducts.save();

    return await serializedOrderProductSchema.validate(order, {
      stripUnknown: true,
    });
  };
}

export default new OrderProductService();
