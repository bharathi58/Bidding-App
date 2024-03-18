// Products.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    prod_name: {
        type: String,
        required: [true, "Name is Required"],
        trim: true
    },
    category: {
        type: String,
        default: "miscellaneous",
        trim: true
    },
    startprice: {
        type: Number,
        required: [true, "Starting Price not be empty"],
    },
    enddate: {
        type: Date,
        required: [true, "End Date Must be entered"]
    },
    prod_img: {
        type: String,
        required: [true, "Image not given"]
    },
    prod_details: {
        type: String,
        required: [true, "Product Details not entered"]
    }
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
