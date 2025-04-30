const ContactModel = require("../models/contactModel");
const sendEmail = require('../sendEmail');

// Define the addContact function
const addContact = async (req, res) => {
  const { name, email, message } = req.body;

  // Validate the required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create a new contact submission in the database
    const newContact = new ContactModel({
      name,
      email,
      message
    });

    // Save to the database
    await newContact.save();

    // Send the email
    await sendEmail(name, email, message);

    // Send success response
    return res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (err) {
    console.error('Error saving contact submission: ', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};


const notFoundPage = (req, res) => {
    res.status(404).render('404', { title: '404' });
  };
module.exports = {
    addContact, 
   notFoundPage
 }  