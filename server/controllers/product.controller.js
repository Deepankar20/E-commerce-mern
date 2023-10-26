import Product from "../models/product.model.js";

export const getAllProducts = async () => {};

export const getOneProduct = async (req, res) => {
 
  try {
    const productDetails = await Product.findById({_id : req.params.id});
    if(!productDetails) res.status(404).json("user not found");

    res.status(201).json(productDetails);
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    await newProduct.save();
    res.status(201).json({
      message: "product listed successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "some error occured",
    });
  }
};

export const updateProduct = async () => {};

export const deleteProduct = async () => {};
