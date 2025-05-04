const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body); // Create a new product with the request body
    await product.save(); // Save the product to the database
    res.status(201).json({ message: "Product added", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: Update an existing product by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    // Update the product fields from the request body
    Object.assign(product, req.body); // This will update the product with the new data from the body
    
    await product.save();
    res.json({ message: "Product updated", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: Delete a product by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;