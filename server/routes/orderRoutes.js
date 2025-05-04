const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Place new order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("userId").populate("productId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: Update an order by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    // Update the order with new data from the request body
    Object.assign(order, req.body); // Or you can update specific fields, like order.status = req.body.status;
    
    await order.save();
    res.json({ message: "Order updated", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: Delete an order by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndDelete(id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;