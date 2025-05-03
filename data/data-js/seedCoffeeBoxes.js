const mongoose = require('mongoose');
require('dotenv').config()      
const CoffeeBoxModel = require('../../models/coffee-box')
const coffeeBoxMockData = require('./coffeeBoxes')


/**
 *  Be careful this command line delete all coffee data and add mock data in the DB. 
 *  Therefore only must use to add mock data in DB.
 *
    node ./data/seedCoffeeBoxes.js
 */
async function seedCoffeeBox() {
    try {
        await mongoose.connect(process.env.MONGO_URI)    

        // Clear existing coffee data
        await CoffeeBoxModel.deleteMany({});
        console.log('Existing coffee box data cleared');

        // Insert new coffee data
        await CoffeeBoxModel.insertMany(coffeeBoxMockData);
        console.log('Coffee Box data seeded successfully');

        // Close the connection
        await mongoose.connection.close();
        console.log('Database connection closed');

    } catch (error) {
        console.error('Error seeding coffee box data=>', error);
        process.exit(1); // Exit with failure
    }
}

const fixCoffeeSelectionIds = async () => {
    await mongoose.connect(process.env.MONGO_URI)   

    const coffeeBoxes = await CoffeeBoxModel.find({});
    for (const box of coffeeBoxes) {
        box.coffeeSelection = box.coffeeSelection.map(id =>
            mongoose.Types.ObjectId.isValid(id) ? new mongoose.Types.ObjectId(id) : id
        );
        await box.save();
    }
    await mongoose.connection.close();
    console.log('Coffee selection IDs fixed.');
};

async function mainSeedCoffeeBoxes() {
    try {
        // Run the seed function first
        await seedCoffeeBox();

        // Then fix the coffeeSelection IDs
        await fixCoffeeSelectionIds();

        console.log('Seeding and fixing completed successfully');
    } catch (error) {
        console.error('Error during seeding and fixing:', error);
    }
}

mainSeedCoffeeBoxes();
