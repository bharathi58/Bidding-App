// DBConnect.js
const mongoose = require("mongoose");
function DBConnect() {
    mongoose.connect("mongodb+srv://dhanavel:xvs6x8437rnwb3UF@cluster0.n8mqvth.mongodb.net/CreateListing?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true // Add this line to avoid deprecation warning
    }).then((conn) => {
        console.log("Connected to DB");
    }).catch((err) => {
        console.log("Some error in DB connection",err);
    });
}

module.exports = DBConnect;
