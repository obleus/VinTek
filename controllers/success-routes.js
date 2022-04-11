const router = require("express").Router();
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

router.get("/success", (req, res) => {
  res.render("success");
});

module.exports = router;
