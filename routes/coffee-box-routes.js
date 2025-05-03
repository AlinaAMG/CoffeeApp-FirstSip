const router = require('express').Router();
// const verifyJWT = require('../auth/auth')
const{getAllCoffeeBoxes, getCoffeeBoxDetails}=require('../controllers/coffee-box-controller')

router.get('/api/coffee-box/all-coffee-boxes', getAllCoffeeBoxes)
router.get('/api/coffee-box/details/:_id', getCoffeeBoxDetails)

module.exports=router