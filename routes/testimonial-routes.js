const router = require('express').Router();
const verifyJWT = require('../auth/auth')

const {getTestimonials, addTestimonial, deleteTestimonial, updateTestimonial} =require('../controllers/testimonials-controller')

router.get('/api/testimonials', getTestimonials)
router.post('/api/testimonials', addTestimonial)
router.delete('/api/testimonail/delete',deleteTestimonial)
router.put('/api/testimonail/update',updateTestimonial)

module.exports=router