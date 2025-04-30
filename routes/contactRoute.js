const express = require('express');
const route = express.Router();
const contactController = require('../controllers/contactController');



route.post("/contact", contactController.addContact);

route.get('*', contactController.notFoundPage);

module.exports = route;

