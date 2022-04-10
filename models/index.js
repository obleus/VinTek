// Import all models
const User = require("./User");
const Category = require("./Category");
const Product = require("./Product");
const ProductOrder = require("./ProductOrder");

// User can have many orders
User.hasMany(ProductOrder, { foreignKey: "user_id" });

// Orders can belong to one user
ProductOrder.belongsTo(User, { foreignKey: "user_id" });

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: "category_id" });

// Categories have many Products
// Category.hasMany(Product, { foreignKey: "product_id" });

// Product belongs to ProductOrder
Product.belongsTo(ProductOrder, { constraints: false });

// ProductOrder has many Product
ProductOrder.hasMany(Product, { constraints: false });

// Export Models
module.exports = { User, Category, Product, ProductOrder };
