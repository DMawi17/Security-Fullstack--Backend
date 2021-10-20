import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const { Schema, model } = mongoose;
const { genSalt, hash, compare } = bcrypt;
const { isEmail } = validator;

const UserSchema = new Schema({
    email: {
        type: String,
        required: "Email is required.",
        index: { unique: true },
        validate: isEmail,
    },
    password: {
        type: String,
        required: "Password is required",
        minlength: [6, "The minimum length of 6 characters."],
    },
});

UserSchema.pre("save", async function (next) {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
});

// UserSchema.statics.authenticate = async (plainText) => {
//     return compare(plainText, this.password);
// };

export default model("User", UserSchema);
