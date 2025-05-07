const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter using Yahoo's SMTP settings
let transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,  // Use SSL port
  secure: true,  // True for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,  // Your Yahoo email
    pass: process.env.EMAIL_PASS   // Your app password
  },
  debug: true  // Optional: enable debugging to see detailed output
});

// Define the sendEmail function
const sendEmail = async (name, email, message) => {
  // Set up email data
  const mailOptions = {
    from: process.env.EMAIL_USER,  // You (the owner of the Yahoo email)
    to: process.env.EMAIL_USER,    // You (the recipient of the contact form)
    subject: `Contact Form Submission from ${name}`,  // Email subject line
    text: `Message from ${name} (${email}):\n\n${message}`,  // Plain text message
    html: `<p>Message from ${name} (${email}):</p><p>${message}</p>`,  // HTML formatted message
    replyTo: email  // Add the user email for replies
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


// // Create a transporter using Yahoo's SMTP settings
// let transporter = nodemailer.createTransport({
//   host: 'smtp.mail.yahoo.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   },
//   debug: true
// });

// // 🔧 Test the email transporter
// transporter.sendMail({
//   from: process.env.EMAIL_USER,
//   to: process.env.EMAIL_USER,
//   subject: 'Test email from Node.js',
//   text: 'This is just a test message'
// }, (err, info) => {
//   if (err) {
//     console.error("Test email failed:", err);
//   } else {
//     console.log("✅ Test email sent:", info.response);
//   }
// });

// const sendEmail = async (name, email, message) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_USER,
//     subject: `Contact Form Submission from ${name}`,
//     text: `Message from ${name} (${email}):\n\n${message}`,
//     html: `<p>Message from ${name} (${email}):</p><p>${message}</p>`,
//     replyTo: email
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.response);
//   } catch (error) {
//     console.log('Error sending email:', error);
//     throw new Error('Error sending email');
//   }
// };

module.exports = sendEmail;
