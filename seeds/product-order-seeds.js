const { ProductOrder } = require('../models');

const productOrderData = [
  {
    id: 'LG Monitor',
    price: 20
  },
]

const seedProductOrder = () => ProductOrder(productOrderData);

module.exports = seedProductOrder;