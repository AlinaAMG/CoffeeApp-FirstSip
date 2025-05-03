const mongoose = require("mongoose")

const TestimonialSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
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

const TestimonialModel = mongoose.model("testimonials", TestimonialSchemaSchema) 
module.exports = TestimonialModel
