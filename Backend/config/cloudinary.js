const cloudinary = require("cloudinary").v2;

// ✅ THIS WAS MISSING
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Optional debug (keep for now)
console.log("Cloudinary ENV:", {
  name: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY ? "LOADED" : "MISSING",
  secret: process.env.CLOUDINARY_API_SECRET ? "LOADED" : "MISSING",
});

module.exports = cloudinary;
