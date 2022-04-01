// import all models
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Order = require('./Order');
const ProductOrder = require('./ProductOrder')

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: 'category_id' })

// Categories have many Products
Category.hasMany(Product, { foreignKey: 'category_id' })

// Orders can belong to one user

// User can have many orders
User.hasMany(Order, { foreignKey: 'user_id' })
Order.belongsTo(Product, { foreignKey: 'user_id' })

module.exports = { User, Category, Product, Order, ProductOrder };
