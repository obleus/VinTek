const { User } = require("../models");

const userdata = [
  {
    email: "mike@test.net",
    fullname: "Michael Diamond",
    password: "pass1234",
  },
  {
    email: "odney@test.net",
    fullname: "Odney Bleus",
    password: "pass1234",
  },
  {
    email: "brooke@test.net",
    fullname: "Brooke Paglia",
    password: "pass1234",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
