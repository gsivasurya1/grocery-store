require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB =
  require("./config/db");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(
  "/api/products",
  require("./routes/productRoutes")
);
app.use(
  "/api/orders",
  require("./routes/orderRoutes")
);
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.get("/", (req, res) => {
  res.send("Shiva Store API Running");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});