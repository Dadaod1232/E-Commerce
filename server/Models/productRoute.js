// productRoute.js
import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js";

const productRoute = express.Router();

// GET ALL PRODUCTS
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); // Fetch all products from the database
    res.json(products);
  })
);

export default productRoute;
