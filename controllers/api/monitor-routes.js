const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/monitors` endpoint

// get all monitors products
router.get("/", (req, res) => {
  Product.findAll({
    attributes:''
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;