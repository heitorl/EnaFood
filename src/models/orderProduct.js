import mongoose from "mongoose";

export const OrderProducts = mongoose.model("OrderProducts", {
  quantity: {
    type: Number,
    required: true,
  },

  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Orders",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
  },
});
