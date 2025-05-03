const mongoose = require('mongoose');
const CoffeeBoxModel = require('../models/coffee-box')

const getAllCoffeeBoxes = (req, res) => {
    CoffeeBoxModel.find({})
        .populate('coffeeSelection')
        .then(data => {
            if (data.length > 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ message: 'No coffee box found.' });
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Error retrieving coffee box..', details: err });
        });
};

const getCoffeeBoxDetails = (req, res) => {
    const { _id } = req.params; // Extract the category from the request parameters

    // console.log(_id);

    if (!mongoose.isValidObjectId(_id)) {
        return res.status(400).send({ error: 'Invalid coffee box ID.' });
    }

    CoffeeBoxModel.findById(_id)
        .populate('coffeeSelection')
        .then(data => {
            if (data) {
                console.log('Populated data:', data);
                res.status(200).send(data);
            } else {
                res.status(404).send({ message: 'No coffee box found.' });
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Error retrieving coffee box.', details: err });
        });
}

module.exports = {
    getAllCoffeeBoxes,
    getCoffeeBoxDetails

}