const router = require("express").Router();
const { ProductOrder, User } = require("../../models");
const withAuth = require("../../utils/auth");

// The `/api/productorders` endpoint

// find product orders by id
router.get("/:id", (req, res) => {
  ProductOrder.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["id"],
      },
    ],
  })
    .then((dbProductOrderData) => {
      if (!dbProductOrderData) {
        res
          .status(404)
          .json({ message: "No product order found with this id" });
        return;
      }
      res.json(dbProductOrderData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create product orders
router.post("/", withAuth, (req, res) => {
  ProductOrder.create({
    product_id: req.body.product_id,
    order_id: req.body.order_id,
  })
    .then((dbProductOrderData) => {
      req.session.save(() => {
        req.session.product_id = dbProductOrderData.product_id;
        req.session.order_id = dbProductOrderData.order_id;
        req.session.loggedIn = true;
        res.json(dbProductOrderData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a delete product orders by id
router.delete("/:id", (req, res) => {
  ProductOrder.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProductOrderData) => {
      if (!dbProductOrderData) {
        res
          .status(404)
          .json({ message: "No product order found with this id" });
        return;
      }
      res.json(dbProductOrderData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
