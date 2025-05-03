
require('dotenv').config();                  
const express = require("express");
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
const path = require('path'); 

const router = require('./routes/routes.js');
const route = require("./routes/contactRoute.js");                

require("./configs/mongoose.js"); 

const app = express();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./configs/mongoose.js")   

// Routes
app.use(router); 
app.use(route);

module.exports = app;

// Server
const APP_PORT= process.env.PORT || 4001;
const server=app.listen(APP_PORT, () => {
    let { address, port } = server.address()
    if (address === '::') {
        address = 'localhost'
    }
    console.log(`Server is listening at http://${address}:${port}`)
});