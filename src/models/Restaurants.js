import mongoose from "mongoose";

export const Restaurants = mongoose.model("Restaurants", {
  name: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});
