const router = require("express").Router();
const { Product, Category } = require("../models");

router.get("/", (req, res) => {
  Product.findAll({
    include: [
      {
        model: Category,
      },
    ],
  })
    .then((dbProductData) => {
      const products = dbProductData.map((product) =>
        product.get({ plain: true })
      );
      res.render("homepage", { products, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/product", (req, res) => {
  res.render("product");
});

module.exports = router;
