// import all models
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Order = require('./Order');

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: 'category_id' })

// Categories have many Products
Category.hasMany(Product, { foreignKey: 'category_id' })

// Orders can belong to one user

// User can have many orders
User.hasMany(Order, { foreignKey: 'order_id' })

module.exports = { User, Category, Product, Order };
