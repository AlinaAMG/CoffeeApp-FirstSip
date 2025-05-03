const mongoose = require("mongoose");

const coffeeBoxSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        pricePerMonth: {
            type: Number,
            required: true
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
