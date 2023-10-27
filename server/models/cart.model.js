import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    cartItem: {
      type: Array,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
