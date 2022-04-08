const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');
const productOrderRoutes = require('./product-order-routes');
const chargeRoutes = require('./charge-route');

const floppyRoutes = require('./floppydisks-routes');
const keyboardRoutes = require('./keybaords-routes');
const monitorRoutes = require('./monitor-routes');
const vcrRoutes = require('./vcr-routes');


// name endpoint for routes
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/productorders', productOrderRoutes);
router.use('/charges', chargeRoutes);

router.use('/floppies', floppyRoutes);
router.use('/keyboards', keyboardRoutes);
router.use('/monitors', monitorRoutes);
router.use('/vcrs', vcrRoutes);



module.exports = router;
