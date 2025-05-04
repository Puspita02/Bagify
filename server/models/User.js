const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure unique emails
  },
  password: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: Date, // Track the last login time
    default: null,
  },
}, { timestamps: true }); // This will add createdAt and updatedAt fields automatically

// Create User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;