// import all models
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const ProductOrder = require('./ProductOrder')

// Categories have many Products
Category.hasMany(Product, { foreignKey: 'category_id' })
// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: 'category_id' })

// Orders can belong to one user
ProductOrder.belongsTo(User, { foreignKey: 'user_id' })
// Products belongsTo Product Order
// Product.belongsTo(ProductOrder, {foreignKey: 'product_id' })

// User can have many orders
User.hasMany(ProductOrder, { foreignKey: 'product_id' })




module.exports = { User, Category, Product, ProductOrder };
