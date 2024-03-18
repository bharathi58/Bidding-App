const mongoose = require("mongoose");

// Define the schema for the login collection
const loginSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        trim: true
    },
    user_email: {
        type: String,
        required: true,
        trim: true
    },
    login_pass: {
        type: String,
        required: true
    }
});

// Create the Login model using the schema
const Login = mongoose.model("Login", loginSchema);

// Export the Login model
module.exports = Login;
