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

      const allCategories = products.map(
        (product) => product.category.category_name
      );

      let categories = allCategories.filter((cat, index) => {
        return allCategories.indexOf(cat) === index;
      });

      console.log(categories);
      res.render("homepage", {
        products,
        categories,
        loggedIn: req.session.loggedIn,
      });
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


router.get("/products/:id", (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "price", "product_desc", "product_name"],
  }).then((dbProductData) => {
    const product = dbProductData.get({ plain: true });
    res.render("product", { product });
  });
});

module.exports = router;
