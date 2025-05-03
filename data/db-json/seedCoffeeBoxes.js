const mongoose = require('mongoose');
require('dotenv').config()
const fs = require('fs');
const { ObjectId } = require('mongodb');
const path = require('path');
const CoffeeBoxModel = require('../../models/coffee-box')

/**
 *  Be careful this command line delete all coffee data and add mock data in the DB. 
 *  Therefore only must use to add mock data in DB.
 *  Also the .json data tested in DB and export from DB.
 *
    if you want use, you should write below code line in the terminal.

    node ./data/seedCoffeeBoxes.js

 */
async function seedCoffeeBox() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB');
        // the .json file export from DB.
        const FILE_PATH = path.join(__dirname, './matrix-final-db.coffee-boxes.json');
        const raw = fs.readFileSync(FILE_PATH, 'utf-8');
        let coffeeBoxes = JSON.parse(raw);

        const dataBoxes = coffeeBoxes.map(doc => ({
            _id: ObjectId.createFromHexString(doc._id.$oid),
            name: doc.name,
            description: doc.description,
            pricePerMonth: doc.pricePerMonth,
            discountForSubscription: doc.discountForSubscription,
            coffeeSelection: doc.coffeeSelection.map(id => ObjectId.createFromHexString(id.$oid)),
            weight: doc.weight,
            surprise: doc.surprise,
            slug: doc.slug,
            active: doc.active,
        }));

        // Clear existing coffee data
        await CoffeeBoxModel.deleteMany({});
        console.log('Existing coffee box data cleared');

        // Insert new coffee data
        await CoffeeBoxModel.insertMany(dataBoxes);
        console.log('Coffee Box data seeded successfully');

        // Close the connection
        await mongoose.connection.close();
        console.log('Database connection closed');

    } catch (error) {
        console.error('Error seeding coffee box data=>', error);
        process.exit(1); // Exit with failure
    }
}

seedCoffeeBox();
