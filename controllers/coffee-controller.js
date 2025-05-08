const CoffeeModel = require('../models/coffee')

/** addCoffee

     {
      name: "Ethiopian Yirgacheffe",
      description: "Floral and citrusy Single Origin coffee from Ethiopia.",
      price: 14.99,
      imageUrl: "",
      rating: 4.9,
      bestSeller: true,
      category: "Single Origin"
    }

 */

const addCoffee = (req, res) => {
    const coffee = req.body;
    console.log(coffee);

    if (coffee) {
        new CoffeeModel(coffee).save()
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    } else {
        return res.status(400).send({ error: 'No coffee data.' });
    }
};

const getBestSellers = (req, res) => {
    CoffeeModel.find({ bestSeller: true })
        .then(data => {
            if (data.length > 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ message: 'No best sellers found.' });
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Error retrieving best sellers', details: err });
        });
};

const getAllCoffees = (req, res) => {
    console.log("getAllCoffees route reached"); 
    CoffeeModel.find({})
        .then(data => {
            if (data.length > 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ message: 'No coffees found.' });
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Error retrieving coffees', details: err });
        });
};

const deleteCoffee = (req, res) => {
    const { _id } = req.body; // Extract the _id from the request parameters

    console.log(_id, req.body);

    CoffeeModel.findByIdAndDelete(_id)
        .then(data => {
            if (data) {
                res.status(200).send({ message: 'Coffee deleted successfully', data });
            } else {
                res.status(404).send({ error: 'Coffee not found' });
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Error deleting coffee', details: err });
        });
};

const updateCoffee = (req, res) => {
    const { _id } = req.body
    const updateData = req.body;

    console.log(_id);

    CoffeeModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true })
        .then(data => {
            if (data) {
                res.status(200).send({ message: 'Coffee updated successfully', data });
            } else {
                res.status(404).send({ error: 'Coffee not found' });
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Error updating coffee', details: err });
        });
};

// const getCategoryCoffees = (req, res) => {
//     const { category } = req.params; // Extract the category from the request parameters

//     console.log(req.params);

//     CoffeeModel.find({ category })
//         .then(data => {
//             if (data.length > 0) {
//                 res.status(200).send(data);
//             } else {
//                 res.status(404).send({ message: 'No coffees found for this category.' });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({ error: 'Error retrieving coffees by category', details: err });
//         });
// };

const getCategoryCoffees = (req, res) => {
    const { category } = req.params;  // Use req.params to extract category from URL path

    console.log("Category received:", category);  // Logging to debug

    if (!category) {
        return res.status(400).send({ message: "Category is required." });
    }

    CoffeeModel.find({ category })  // Use category to find matching coffees
        .then(data => {
            if (data.length > 0) {
                res.status(200).send(data);  // Send the found data
            } else {
                res.status(404).send({ message: 'No coffees found for this category.' });
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Error retrieving coffees by category', details: err });
        });
};


const getCoffee = (req, res) => {
    const { _id } = req.params; // Extract the category from the request parameters

    console.log(_id);

    CoffeeModel.findById(_id)
        .then(data => {
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ message: 'No coffees found.' });
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Error retrieving coffee.', details: err });
        });
};

module.exports = {
    getAllCoffees,
     getCoffee,
    addCoffee,
    getBestSellers,
    deleteCoffee,
    updateCoffee,
    getCategoryCoffees,
   
};