const router = require('express').Router();
const { Product, Category, Order, User, ProductOrder } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  Product.findAll({
  })
  .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// get one product
router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      orderIds: [1, 2, 3, 4]
    }
  */
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id
  })
  .then((dbProductData) => res.status(200).json(dbProductData))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// update product
router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated order from ProductOrder
      return ProductOrder.findAll({ where: { product_id: req.params.id, order_id: req.params.id } });
    })
    .then((productOrder) => {
      // get list of current order_ids
      const productOrderIds = productOrder.map(({ order_id }) => order_id);
      // create filtered list of new order_ids
      const newProductOrder = req.body.orderIds
        .filter((order_id) => !productOrderIds.includes(order_id))
        .map((order_id) => {
          return {
            product_id: req.params.id,
            order_id,
          };
        });
      // figure out which ones to remove
      const productOrderToRemove = productOrder
        .filter(({ order_id }) => !req.body.orderIds.includes(order_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductOrder.destroy({ where: { id: productOrderToRemove } }),
        ProductOrder.bulkCreate(newProductOrder),
      ]);
    })
    .then((updatedProductOrder) => res.json(updatedProductOrder))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
    id: req.params.id
    }
})
.then(dbProductData => {
    if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
    }
    res.json(dbProductData);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;