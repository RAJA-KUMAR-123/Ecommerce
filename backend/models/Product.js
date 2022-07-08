const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "not blank"]
  },
  description: {
    type: String,
    required: [true, "not blank"]
  },
  price: {
    type: String,
    required: [true, "not blank"]
  },
  category: {
    type: String,
    required: [true, "not blank"]
  },
  pictures: {
    type: Array,
    required: true
  }
}, {minimize: false});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;