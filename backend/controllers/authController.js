const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    res.status(201).json({
      message: "Registration Successful",
      user: {
        name,
        email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email } = req.body;

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET || "shivastore123",
      { expiresIn: "7d" }
    );

    res.json({
      token,
      message: "Login Successful",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};