const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true,
        default:0
    },
    imageUrl: { 
        type: String, 
        required: false,
        default:""
    },
    bestSeller: { 
        type: Boolean, 
        default: false 
    },
    category: { 
        type: String, 
        enum: ["Single Origin", "Organic", "Premium Blends"], 
        required: true 
    },
    weightOptions: { 
        type: [Number], 
        default: [250, 1000] 
    },
    roastLevel: { 
        type: String, 
        enum: ["Light", "Medium", "Dark"], 
        required: true 
    },
    region: { 
        type: String, 
        required: true 
    },
    tastingNotes: { 
        type: [String] 
    },
    slug: { 
        type: String,
        unique: false, 
        required: false 
    },
    soldOut: { 
        type: Boolean, 
        default: false 
    }
},
{ timestamps: true }
);

const CoffeeModel = mongoose.model("coffees", coffeeSchema);
module.exports = CoffeeModel;
