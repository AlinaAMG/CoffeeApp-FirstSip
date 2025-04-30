require('dotenv').config();                    // for .env file.
const path = require('path')
const express = require("express");
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

const router = require('./routes/routes.js')
const route = require("./routes/contactRoute.js")

require("./configs/mongoose.js")     // it makes a connection with mongoose in MongoDB database.

const app = express();
app.use(cors());
app.use(cookieParser())

// app.use(express.static('front-end'));
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//This will ensure that the request body is parsed correctly and available in req.body. 
// Therefore these must be before router.

app.use(router) 
app.use(route);



// Sending emails from the contact form
app.post('/send-email', (req, res) => {
    // Set up email options (you can get values from req.body for dynamic emails)
    let mailOptions = {
      from: process.env.YAHOO_EMAIL,
      to: 'recipient-email@example.com', 
      subject: 'Contact Form Submission',
      text: 'This is a message from the contact form.',
      html: '<p>This is a message from the contact form.</p>'
    };
  
    let transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: process.env.YAHOO_EMAIL,
        pass: process.env.YAHOO_APP_PASSWORD
      }
    });
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error:', error);
        res.status(500).send('Email sending failed');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });

// Server
const APP_PORT= process.env.PORT || 4001;
const server=app.listen(APP_PORT, () => {
    let { address, port } = server.address()
    if (address === '::') {
        address = 'localhost'
    }
    console.log(`Server is listening at http://${address}:${port}`)
});