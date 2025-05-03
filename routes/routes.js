const router = require('express').Router();
const userRoutes=require('./user-routes')
const coffeeRoutes=require('./coffee-routes')
const coffeeBoxRoutes=require('./coffee-box-routes')
const testimonialRoutes=require('./testimonial-routes')

router.get('/', (req, res) => {  // Main root
  res.status(200).send({message:'This is the main route!'});
});


router.use(userRoutes);
router.use(coffeeRoutes)
router.use(coffeeBoxRoutes)
router.use(testimonialRoutes)


module.exports = router