import Product from "../models/productModel.js";

export const getAllproducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

export const createProduct = async (req, res) => {
  try {
    // const { name, category, type, description, images, variants } = req.body;
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.find({ productId: id });
  console.log(product);
  if (!product) {
    return res.status(404).json({ msg: `no product with id ${id}` });
  }
  res.status(200).json({ product });
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  // const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
  //   new: true,
  // });

  const updatedProduct = await Product.findOneAndUpdate(
    { productId: id },
    req.body,
    { new: true }
  );

  if (!updatedProduct) {
    return res.status(404).json({ msg: `no product with id ${id}` });
  }

  res.status(200).json({ msg: "product modified", product: updatedProduct });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const removedProduct = await Product.findOneAndDelete({ productId: id });

  if (!removedProduct) {
    return res.status(404).json({ msg: `no product with id ${id}` });
  }

  res.status(200).json({ msg: "product deleted", product: removedProduct });
};
