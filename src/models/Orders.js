import mongoose from "mongoose";

export const Orders = mongoose.model("Orders", {
  totalPrice: {
    type: Number,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  orderProducts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
