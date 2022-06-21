import { orderProductService } from "../services";

class orderProductController {
  createOrderProduct = async (req, res) => {
    const order = await orderProductService.createOrderProduct(req);
    return res.status(201).json({ order });
  };
}

export default new orderProductController();
