// import all models
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Order = require('./Order');
const ProductOrder = require('./ProductOrder')

// Categories have many Products
Category.hasMany(Product, { foreignKey: 'category_id' })
// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: 'category_id' })

// Orders can belong to one user
Order.belongsTo(User, { foreignKey: 'user_id' })
// User can have many orders
User.hasMany(Order, { foreignKey: 'order_id' })

// Products belongsTo Product Order
Product.belongsTo(ProductOrder, {foreignKey: 'product_id' })
Order.belongsTo(ProductOrder, { foreignKey: 'order_id' })


module.exports = { User, Category, Product, Order, ProductOrder };
