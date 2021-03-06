// for the dashboard to display all orders
const router = require("express").Router();
const { User, ProductOrder } = require("../models");
const withAuth = require("../utils/auth");

// contains product-order-routes
// dashboard route so users can display their orders
// Create a session, then refrence the session after ProductOrder.

// find user by id
// get all checkout products for the dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  ProductOrder.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "product_id", "user_id", "created_at"],
    include: [
      {
        model: User,
        attributes: ["id"],
      },
    ],
  })
    // return product array to display on dashboard
    // map the products
    // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    .then((dbProductData) => {
      // callbackFn Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.
      // const product = dbProductData.map()
      // res.json(dbProductData);
      res.render("dashboard", { product, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
