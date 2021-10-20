import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) res.status(400).json({ error: "User not found." });

        if (!user.authenticate(req.body.password)) {
            return res
                .status(401)
                .json({ error: "Email and Password don't match." });
        }

        const token = jwt.sign({ _id: user._id }, config.jwtSecret);
        res.cookie("t", token);

        return res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (err) {
        res.status(401).json({ error: "Could not login, try again." });
    }
};

export default login;
