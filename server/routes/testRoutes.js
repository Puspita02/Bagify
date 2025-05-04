const express = require('express');
const bcrypt = require('bcryptjs'); // 🔐 Required for password hashing
const User = require('../models/User');

const router = express.Router();

router.post('/add-dummy-user', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash('123456', 10); // ✅ Hashing the password

    const newUser = new User({
      name: 'Dummy User',
      email: 'dummy@example.com',
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      message: 'User saved',
      user: savedUser,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error saving user', error: err.message });
  }
});

module.exports = router;
