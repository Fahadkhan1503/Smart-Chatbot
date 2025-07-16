import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timesstamps: true,
  }
);

export const User = mongoose.model("User", schema);
