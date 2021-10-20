import User from "../models/user.model.js";
import handleErrors from "../helpers/handleError.js";

export const register = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(200).json({ message: "Successfully Registered" });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};
