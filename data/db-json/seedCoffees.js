const fs = require('fs');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const path = require('path'); 
require('dotenv').config()
const CoffeeModel = require('../../models/coffee')

/**
 *  Be careful this command line delete all coffee data and add mock data in the DB. 
 *  Therefore only must use to add mock data in DB.
 *  Also the .json data tested in DB and export from DB.
 *
    if you want use, you should write below code line in the terminal.
    
    node ./data/seedCoffees.js
 */

async function seedCoffee() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
        // the .json file export from DB.
        const FILE_PATH = path.join(__dirname, './matrix-final-db.coffees.json');
        const raw = fs.readFileSync(FILE_PATH, 'utf-8');
        let coffees = JSON.parse(raw);

        coffees = coffees.map(doc => ({
            _id:  ObjectId.createFromHexString(doc._id.$oid),
            name: doc.name,
            description: doc.description,
            price: doc.price,
            imageUrl: doc.imageUrl,
            bestSeller: doc.bestSeller,
            category: doc.category,
            weightOptions: doc.weightOptions,
            roastLevel: doc.roastLevel,
            region: doc.region,
            tastingNotes: doc.tastingNotes,
            soldOut: doc.soldOut,
        }));

        // Optional: clear collection first
        await CoffeeModel.deleteMany({});
        console.log('Old coffees removed');

        // Insert with preserved _id
        await CoffeeModel.insertMany(coffees);
        console.log('Coffees inserted with original _id');

    } catch (err) {
        console.error('Error during import:', err);
    } finally {
        mongoose.connection.close();
    }
}

seedCoffee();

