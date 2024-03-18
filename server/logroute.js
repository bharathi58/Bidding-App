// logroute.js - Route handlers for login and signup
const Login = require("./login");

exports.getlogin = async (req, res) => {
    try {
        const { user_email, login_pass } = req.body.user;
        console.log(user_email, login_pass);
        // Find user by email
        const user = await Login.findOne({ user_email });

        if (user) {
            if (user.login_pass === login_pass) {
                return res.json("exist");
            } else {
                return res.json("wrongpassword");
            }
        } else {
            return res.json("notexist");
        }
    } catch (e) {
        console.error("Error in getlogin:", e);
        res.status(500).json("fail");
    }
};

exports.setsignup = async (req, res) => {
    try {
        const { user_name, user_email, login_pass } = req.body.user;
        console.log(user_email, login_pass);
        const check = await Login.findOne({ user_email });
        console.log(check);
        if (!check) {
            const newUser = new Login({
                user_name,
                user_email,
                login_pass
            });
            await newUser.save();
            res.json("notexist");
        } else {
            res.json("exist");
        }
    } catch (e) {
        console.error("Error in setsignup:", e);
        res.status(500).json("fail");
    }
};
