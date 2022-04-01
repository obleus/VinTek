const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/product', productRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
