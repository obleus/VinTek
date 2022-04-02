const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductOrder extends Model {}

ProductOrder.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'products',
                key: 'id'
            }
        },
        order_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'orders',
                key: 'id'
            }
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_orders'
    }
);

module.exports = ProductOrder;