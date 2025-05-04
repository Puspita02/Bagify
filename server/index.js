const express = require("express");
const http = require("http");
const cors = require("cors");

const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const testRoutes = require('./routes/testRoutes'); // Load routes here (ok)

// Initialize express
const app = express();
const server = http.createServer(app); // ✅ Only needed if you're doing WebSockets or raw HTTP stuff

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api", testRoutes);

app.get("/", (req, res) => {
  res.send("🎒 Bagify API is working!");
});

// Port setup
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
