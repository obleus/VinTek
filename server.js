const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const stripe = require('stripe')('sk_test_51KjYhLGhlI22DMOEiLUz6LJQpHYIxySIUC8R71Ho3y1LfgT7QvUNeJoagvjiuaM4jza9pxxluO7osQyIhpANMnfr00qxF4eVXx');

const app = express();


app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          productData: {
            name: '[]',
          },
          price: '[]',
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: '/sucess',
    cancel_url: '/cancel',
  });

  res.redirect(303, session.url);
});





const PORT = process.env.PORT || 1001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

