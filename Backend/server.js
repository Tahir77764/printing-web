const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // 👈 MUST BE AT TOP

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors({
  origin: "http://localhost:4011",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/products", productRoutes);

app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
