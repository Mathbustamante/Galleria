const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
   title: String,
   image: String,
   price: Number,
   info: String,
   category: String
});

module.exports = mongoose.model("Products", productsSchema);