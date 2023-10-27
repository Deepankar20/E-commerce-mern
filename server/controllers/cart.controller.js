import Cart from "../models/cart.model.js";

export const createCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    await newCart.save();
    res.status(201).json({ msg: "cart created successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const add = async (req, res) => {
  const newItem = req.body;
  const userRef = req.params.id;

  try {
    const update = await Cart.updateMany(
      { userRef },
      { $push: { cartItem: newItem } }
    );

    if (!update) res.status(404).json({ msg: "cart not found" });

    res.status(201).json({ msg: "item added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "some error occured" });
  }
};
export const remove = async (req, res) => {
  const { userRef, item } = req.body;

  try {
    const update = await Cart.updateMany(
      { },
      { $pull: { cartItem: item } }
    );
    if (!update) res.status(404).json({ msg: "cart not found" });

    res.status(201).json({ msg: "item removed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "some error occured" });
  }
};

export const getCartItems = (req, res) => {};
