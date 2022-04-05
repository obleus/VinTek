const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');
const productOrderRoutes = require('./product-order-routes');

// name endpoint for routes
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/productOrders', productOrderRoutes);

module.exports = router;
