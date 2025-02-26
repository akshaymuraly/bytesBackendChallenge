const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  merchantId: mongoose.Schema.Types.ObjectId,
  title: String,
  category: String,
  description: String,
  order: Number,
  price: Number,
  image: [{ url: String, order: Number }],
  discount: Number,
});

module.exports = mongoose.model("product", productSchema);
