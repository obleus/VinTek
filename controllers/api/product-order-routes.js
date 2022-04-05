const router = require('express').Router();
const { ProductOrder, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post("/", withAuth, (req, res) => {
    ProductOrder.create({
      product_id: req.body.product_id,
      order_id: req.body.order_id,
    })
      .then((dbProductData) => {
        req.session.save(() => {
          req.session.product_id = dbProductData.product_id;
          req.session.order_id = dbOrderData.order_id;
          req.session.loggedIn = true;
          res.json(dbProductData);
        });
    })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
  

module.exports = router;