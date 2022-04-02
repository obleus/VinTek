const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'mike',
    email: 'mike@test.net',
    password: 'pass1234'
  },
  {
    username: 'brooke',
    email: 'brooke@test.net',
    password: 'pass1234'
  },
  {
    username: 'odney',
    email: 'odney@test.net',
    password: 'pass1234'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
