const { ProductOrder, Product } = require('../models');

const productOrderData = [
  {
    id: 'LG Monitor',
    price: 20
  },
]

const seedProductOrder = () => new ProductOrder(productOrderData);

module.exports = seedProductOrder;