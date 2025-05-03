const mongoose = require("mongoose")

const TestimonialSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return value.trim().length > 3;
      },
      message: "Author field cannot be empty and must be bigger than 3 letters.",
    },
  },
  text: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return value.trim().length > 40;
      },
      message: "Text field cannot be empty and must be bigger than 40 letters.",
    },
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  verified: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const TestimonialModel = mongoose.model("testimonials", TestimonialSchema)
module.exports = TestimonialModel
