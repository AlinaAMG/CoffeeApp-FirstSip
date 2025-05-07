const mongoose = require("mongoose")

const coffeeSchema = new mongoose.Schema(
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
      validate: {
        validator: (value) => {
          return value.trim().length > 3;
        },
        message: "Description cannot be empty and must be bigger than 3 letters.",
      }
    },
    price: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => {
          return value > 0;
        },
        message: "Price must be bigger than 0.",
      }
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
  
  suitableFor: {
    type: [String], // Array of strings to represent different types of coffee
    required: true,
    default: ['Espresso', 'Drip Coffee', 'French Press'], // Default example values
  },
    soldOut: {
      type: Boolean,
    },
  },
  { timestamps: true });

const CoffeeModel = mongoose.model("coffees", coffeeSchema)
module.exports = CoffeeModel 