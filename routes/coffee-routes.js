const router = require('express').Router();
const verifyJWT = require('../auth/auth')
const { addCoffee, getBestSellers, deleteCoffee, updateCoffee, 
        getAllCoffees, getCategoryCoffees, getCoffee } = require("../controllers/coffee-controller");


/* Coffee routes*/

router.post('/api/coffees/add-coffee', verifyJWT, addCoffee)  //
router.delete('/api/coffees/delete-coffee', verifyJWT, deleteCoffee)
router.put('/api/coffees/update-coffee', verifyJWT, updateCoffee)
router.get('/api/coffees/all-coffees',  getAllCoffees)
router.get('/api/coffees/best-sellers',  getBestSellers)

/** From postman or frontend
    localhost:4001/api/coffees/category/Single%20Origin // %20 is space
 */
      
router.get('/api/coffees/category/:category', getCategoryCoffees)

/** From postman or frontend
     http://localhost:4001/api/coffees/644f1b2e5f1c2a001c8e4d3a
 */

router.get('/api/coffees/coffee/:_id',  getCoffee)

module.exports=router