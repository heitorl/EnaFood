import { productService } from "../services";
class ProductController {
  createProduct = async (req, res) => {
    const products = await productService.createProducts(req);
    return res.status(201).json({ products });
  };

  getProduct = async (req, res) => {
    const products = await productService.getProductInRestaurant(req);

    return res.status(200).json(products);
  };
}

export default new ProductController();
