const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

// Signup Controller
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    await user.save();

    res.status(201).json({ message: "Signup successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during signup" });
  }
};

// Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ message: "Login successful", user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during login" });
  }
};
