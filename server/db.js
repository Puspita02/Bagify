const mongoose = require("mongoose");
require("dotenv").config();

console.log(process.env.MONGO_URI);  

// Connect to MongoDB
// This function connects to the MongoDB database using Mongoose.
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; // Read from .env file
    if (!uri) {
      throw new Error("MongoDB connection string is missing from .env file.");
    }
    await mongoose.connect(uri); // No need for deprecated options
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  }
};

module.exports = connectDB;