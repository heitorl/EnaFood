import mongoose from "mongoose";

export const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },

  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },

  restaurants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurants",
    },
  ],
});
