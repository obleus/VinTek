const seedUsers = require("./user-seeds");
const seedProducts = require("./products-seeds");
const seedCategories = require("./category-seeds");
const seedProductOrder = require("./product-order-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  // drop table if one exists, and force a new one.
  await sequelize.sync({ force: true });
  console.log("--------------");

  await seedUsers();
  console.log("--------------");

  await seedCategories();
  console.log("--------------");

  await seedProductOrder();
  console.log("--------------");

  await seedProducts();
  console.log("--------------");

  // exit with success.
  process.exit(0);
};

seedAll();
