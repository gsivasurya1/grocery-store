const createOrder = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getOrders = async (req, res) => {
  try {
    res.json([]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
};