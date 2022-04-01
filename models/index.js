// import all models
const User = require("./User");
const Category = require('./Category');
const Product = require('./Product');

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: 'category_id' })

// Categories have many Products
Category.hasMany(Product, { foreignKey: 'category_id' })

module.exports = { User, Category, Product };
