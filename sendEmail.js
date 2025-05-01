const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter using Yahoo's SMTP settings
let transporter = nodemailer.createTransport({
  service: 'yahoo',  // Yahoo email service
  auth: {
    user: process.env.YAHOO_EMAIL,    
    pass: process.env.YAHOO_APP_PASSWORD  
  }
});

// Define the sendEmail function
const sendEmail = async (name, email, message) => {
  // Set up email data
  const mailOptions = {
    from: process.env.YAHOO_EMAIL,  
    to: email,                    
    subject: 'Contact Form Submission',
    text: `Message from ${name}:\n\n${message}`,
    html: `<p>Message from ${name}:</p><p>${message}</p>`,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.log('Error sending email:', error);
    throw new Error('Error sending email');
  }
};


module.exports = sendEmail;
