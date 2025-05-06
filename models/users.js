const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return value.trim().length > 3;
            },
            message: "Name cannot be empty and must be bigger than 3 letters.",
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
        validate: {
            validator: (value) => {
                return value.trim().length > 3;
            },
            message: "Password cannot be empty and must be bigger than 3 letters.",
        }
    },
    confirmPassword: {
        type: String,
        required: true,
        // minLength: 6
    },
    role: {
        type: String
    }
},
    {
        timestamps: true
    }
)

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel 