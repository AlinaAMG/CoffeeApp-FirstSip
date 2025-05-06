const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true ,
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
        match: /.+\@.+\..+/ 
    },
    message: { 
        type: String, 
        required: true,
        validate: {
            validator: (value) => {
              return value.trim().length > 30;
            },
            message: "Message cannot be empty and must be bigger than 30 letters.",
          }
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model("Contact", contactSchema);
