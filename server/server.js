const express = require("express");
const DBConnect = require("./DBConnect");
const cors = require("cors");
const rout = require("./routing");
const logrout = require("./logroute");
const app = express();

app.use(express.json());
app.use(cors());

DBConnect();

// Routing for demo, creating listing, and active listings
app.get("/", rout.getDemo);
app.post("/createlisting", rout.createlisting);
app.get("/activelistings/:id", rout.getactivelisting);
app.get("/activelistings", rout.getactivelistings);

// Routing for login and signup
app.post("/login", logrout.getlogin);
app.post("/signup", logrout.setsignup);

app.listen(4000, () => {
    console.log("Server Started....");
});
