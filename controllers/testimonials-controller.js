const testimonials = require('../data/data-js/testimonials')
const TestimonialModel = require('../models/testimonial')
// const { ObjectId } = require('mongodb');


const getTestimonials = (req, res) => {
    TestimonialModel.find({}).sort({ _id: 'desc' })
        .then(testimonials => {
            if (testimonials.length === 0)
                res.send({ data: 'No testimonials in DB!' })
            else
                res.status(200).send(testimonials)
        }).catch(err => {
            res.status(500).send(err)
        })
}

const addTestimonial= async (req, res) => {
    const { ...testimonial} = req.body
    // console.log(testimonial, req.body)

    new TestimonialModel(testimonial).save()
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

const deleteTestimonial = (req, res) => {
    const { _id } = req.body; // Extract the _id from the request parameters

    console.log(_id);

    TestimonialModel.findByIdAndDelete(_id)
        .then(data => {
            if (data) {
                res.status(200).send({ message: 'Testimonial deleted successfully', data });
            } else {
                res.status(404).send({ error: 'Testimonial not found' });
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Error deleting testimonial', details: err });
        });
};

const updateTestimonial = (req, res) => {
    const { _id } = req.body
    const updateData = req.body;

    console.log(_id);

    TestimonialModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true })
        .then(data => {
            if (data) {
                res.status(200).send({ message: 'Testimonial updated successfully', data });
            } else {
                res.status(404).send({ error: 'Testimonial not found' });
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Error updating testimonial', details: err });
        });
};

module.exports = {
    getTestimonials,
    addTestimonial,
    deleteTestimonial,
    updateTestimonial
}
