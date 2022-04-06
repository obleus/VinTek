const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductOrder extends Model {}

ProductOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    // product_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "products",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "product_orders",
  }
);

module.exports = ProductOrder;
