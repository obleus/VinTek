const express = require('express');
const stripe = require('stripe')('sk_test_51KjYhLGhlI22DMOEiLUz6LJQpHYIxySIUC8R71Ho3y1LfgT7QvUNeJoagvjiuaM4jza9pxxluO7osQyIhpANMnfr00qxF4eVXx');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
// for heroku 
const port = port.env.PORT || 5000;

