const products = require("../data/products");

const getProducts = async (req, res) => {
  res.json(products);
};

const addProduct = async (req, res) => {
  res.status(201).json({
    message: "Product Added Successfully",
  });
};

module.exports = {
  getProducts,
  addProduct,
};