// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'users',
          key: 'id'
      }  
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'products',
          key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orders',
  }
);

module.exports = Order;

// fk for the product