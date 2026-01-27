const express = require("express");
const Product = require("../models/Product");
const upload = require("../config/multer"); // ensure this points to correct multer with Cloudinary

const router = express.Router();

// CREATE PRODUCT
router.post("/", upload.single("media"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { name, price, category } = req.body;

    const product = new Product({
      name,
      price,
      category,
      media: req.file.path, // Cloudinary URL
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});

// GET PRODUCTS
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;
    const query = search ? { name: { $regex: search, $options: "i" } } : {};
    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
