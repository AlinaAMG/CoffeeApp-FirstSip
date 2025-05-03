const mongoose = require("mongoose");

const coffeeBoxSchema = new mongoose.Schema(
    {
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
        description: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    return value.trim().length > 3;
                },
                message: "Description cannot be empty and must be bigger than 3 letters.",
            }
        },
        pricePerMonth: {
            type: Number,
            required: true,
            validate: {
                validator: (value) => {
                    return value > 0;
                },
                message: "Price per month must be bigger than 0.",
            }
        },
        discountForSubscription: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        },
        coffeeSelection: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "coffees",
            }
        ],
        weight: {
            type: String,
            required: true,
            enum: ["250", "1000"]
        },
        surprise: {
            type: Boolean,
            default: false
        },
        slug: {
            type: String,
            unique: false,
            required: false
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

const CoffeeBoxModel = mongoose.model("coffee-boxes", coffeeBoxSchema);
module.exports = CoffeeBoxModel;
