const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Monitors',
  },
  {
    category_name: 'Floppy Disks',
  },
  {
    category_name: 'Keyboards',
  },
  {
    category_name: 'VCR',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
