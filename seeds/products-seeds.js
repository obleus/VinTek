const { Product } = require('../models');

const productData = [
  {
    product_name: 'LG Monitor',
    price: 20,
    stock: 5,
    category_id: 1,
  },
  {
    product_name: 'Samsung Monitor',
    price: 30,
    stock: 5,
    category_id: 1,
  },
  {
    product_name: 'Dell Monitor',
    price: 10,
    stock: 2,
    category_id: 1,
  },
  {
    product_name: 'Philips Monitor',
    price: 5,
    stock: 5,
    category_id: 1,
  },
  {
    product_name: 'LG Disks',
    price: 20,
    stock: 5,
    category_id: 2,
  },
  {
    product_name: 'Samsung Disks',
    price: 20,
    stock: 5,
    category_id: 2,
  },
  {
    product_name: 'Dell Disks',
    price: 20,
    stock: 5,
    category_id: 2,
  },
  {
    product_name: 'Philips Disks',
    price: 20,
    stock: 5,
    category_id: 2,
  },
  {
    product_name: 'LG Keyboad',
    price: 20,
    stock: 5,
    category_id: 3,
  },
  {
    product_name: 'Samsung Keyboad',
    price: 20,
    stock: 5,
    category_id: 3,
  },
  {
    product_name: 'Dell Keyboad',
    price: 20,
    stock: 5,
    category_id: 3,
  },
  {
    product_name: 'Philips Keyboad',
    price: 20,
    stock: 5,
    category_id: 3,
  },
  {
    product_name: 'LG VCR',
    price: 20,
    stock: 5,
    category_id: 4,
  },
  {
    product_name: 'Samsung VCR',
    price: 20,
    stock: 5,
    category_id: 4,
  },
  {
    product_name: 'LG VCR',
    price: 20,
    stock: 5,
    category_id: 4,
  },
  {
    product_name: 'Philips VCR',
    price: 20,
    stock: 5,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;