// routing.js
const Products = require("./Products");

exports.getDemo = (req, res) => {
    res.send("This is from Server..!");
};

exports.createlisting = async (req, res) => {
    try {
        const Product = await Products.create(req.body);
        res.status(201).json({
            data: Product,
            message: "New product listed"
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getactivelistings = async (req, res) => {
    try {
        const allProducts = await Products.find();
        res.status(200).json({ products: allProducts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getactivelisting = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ data: product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
