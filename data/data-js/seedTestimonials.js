
const mongoose = require('mongoose');
require('dotenv').config()

const TestimonialModel = require('../../models/testimonial')
const testimonialMockData = require('./testimonials')  //require('./matrix-final-db.coffees.json')

/**
 *  Be careful this command line delete all coffee data and add mock data in the DB.
 *  Therefore only must use to add mock data in DB.
 *
    node ./data/data-js/seedTestimonials.js
 */
async function seedTestimonials() {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        // Clear existing coffee data
        await TestimonialModel.deleteMany({});
        console.log('Existing coffee data cleared');

        // Insert new coffee data
        await TestimonialModel.insertMany(testimonialMockData);
        console.log('Coffee data seeded successfully');

        // Close the connection
        await mongoose.connection.close();
        console.log('Database connection closed');

    } catch (error) {
        console.error('Error seeding coffee data:', error);
        process.exit(1); // Exit with failure
    }
}

// Run the seed function
seedTestimonials();