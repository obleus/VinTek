const { ProductOrder } = require("../models");

const productOrderData = [
  {
    user_id: 1,
    product_id: [1, 3, 4],
  },
];

const seedProductOrder = () => new ProductOrder(productOrderData);

module.exports = seedProductOrder;
