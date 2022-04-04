const express = require('express');
const stripe = require('stripe')('sk_test_51KjYhLGhlI22DMOEiLUz6LJQpHYIxySIUC8R71Ho3y1LfgT7QvUNeJoagvjiuaM4jza9pxxluO7osQyIhpANMnfr00qxF4eVXx');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

app.listen(port, () => (
    console.log(`Server started on port ${port}`)
));





// for heroku 
//const port = port.env.PORT || 5000;
//https://www.youtube.com/watch?v=QT3_zT97_1g
//https://www.youtube.com/watch?v=UjcSWxPNo18
//https://www.youtube.com/watch?v=rMiRZ1iRC0A&t=4146s