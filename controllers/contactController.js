const ContactModel = require("../models/contactModel");
const sendEmail = require('../sendEmail');
const axios = require("axios");

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

const quizController = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // OpenAI API key here
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('OpenAI response:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to connect to OpenAI' });
  }
};


const notFoundPage = (req, res) => {
    res.status(404).render('404', { title: '404' });
  };
module.exports = {
  addContact, 
  quizController,
   notFoundPage
 }  