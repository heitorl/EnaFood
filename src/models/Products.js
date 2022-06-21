import mongoose from "mongoose";

export const Products = mongoose.model("Products", {
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantityInStock: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: false,
  },

  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
