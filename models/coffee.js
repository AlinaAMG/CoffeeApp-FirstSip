const mongoose = require("mongoose")

const coffeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: false,
    },
    notes: {
      type: [String],
      required: false

    },
    longDescription: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    weightOptions: {
      type: [Number],
      required: false,
      default: [250, 1000]
    },
    imageUrl: {
      type: String,
      default: "",
      required: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      enum: ["Single Origin", "Organic", "Premium Blends"],
      required: true
    },
    slug: {
      type: String,
      unique: false,
      required: false
    },
    bestSeller: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true });

const CoffeeModel = mongoose.model("coffees", coffeeSchema)
module.exports = CoffeeModel 