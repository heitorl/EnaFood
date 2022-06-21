import mongoose from "mongoose";

export const Address = mongoose.model("Address", {
  street: {
    type: String,
    required: true,
  },
  houseNumber: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
