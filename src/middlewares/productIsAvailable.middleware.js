import { Products } from "../models";

const productIsAvailable = async (req, res, next) => {
  const product = await Products.findOne({
    _id: req.params.id,
  });
  if (!product.available) {
    return res.status(404).json({ message: "no products available." });
  }
  if (product.quantityInStock < 1) {
    product.available = false;
    product.save();
    return res.status(404).json({ message: "no products available." });
  }
  if (req.validated.quantity > product.quantityInStock) {
    console.log(product);
    return res
      .status(404)
      .json({ message: `only ${product.quantityInStock} products available` });
  }

  product.quantityInSock = product.quantityInStock - req.validated.quantity;
  product.save();

  console.log(product);
  return next();
};

export default productIsAvailable;
