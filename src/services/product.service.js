import res from "express/lib/response";
import { Products, Restaurants } from "../models";
import {
  getAllProductSchema,
  serializedCreatedProductsSchema,
} from "../schemas";

class ProductService {
  createProducts = async (req) => {
    const restaurant = await Restaurants.findOne({
      _id: req.params.id,
    });

    req.validated.products.map((p) => (p.restaurant = restaurant));

    const products = await Products.create(req.validated.products);

    return serializedCreatedProductsSchema.validate(products, {
      stripUnknown: true,
    });
  };

  getProductInRestaurant = async (req) => {
    const products = await Products.find({
      restaurant: req.params.id,
    });

    return await getAllProductSchema.validate(products, { stripUnknown: true });
  };
}

export default new ProductService();
