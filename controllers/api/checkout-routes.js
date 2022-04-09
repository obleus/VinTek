const router = require('express').Router();
const { ProductOrder } = require('../../models');
const withAuth = require('../../utils/auth');
const stripe = require('stripe')('sk_test_51KmhLoJNQxhGhSP5fNL5K6VfGxwqIaGIUsPJR0IOi8GXmhkX0zf2pYkDA2vzZK15cvokRWb4cV6Ly1SZt2DPRtWE00MciTudDz');


// const stripe,
// stripe api key
// route for checkout session

// Create a session, then refrence the session after ProductOrder.
router.get('/', (req, res) => {
  ProductOrder.findAll()
    .then(dbProductOrderData => res.json(dbProductOrderData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/cart', withAuth, (req, res) => {
  if (req.session.cart){
    req.session.cart.push(req.body.product)
  }
  else {
    req.session.cart = [req.body.product]
  }
    console.log(req.session.cart)
    res.send('success');
});

app.post('/create-checkout-session', async (req, res) => {
  /*process req.session.cart
  get all unique values. how many times product 3,4 show up.
  query products for those unique keys and subtract by the amount the times those values show up.
  example 12 monitors.  */

var isUnique = function (arr) {
  let count = {}
  arr.forEach(element => {
      count[element] = (count[element] || 0) + 1
  })
 return count
};
let uniqueProducts = isUnique (req.session.cart)
/* query products for uniqueProducts key and subtract unique productsvalue from productquantity */
/* retrieve query information. add to line itemobject array */
let purchaseProduct = [] // follow syntax of line item where each object is a product that a customer bought.
/*example
LOOK UP FOR IN LOOP, ALLOW YOU TO GRAB KEY AND VALUE
THIS IS PURCHASE PRODUCT 
[
    {
      price_data: {
        currency: 'usd',
        // extract values stored from the database
        product_data: {
          name: 'LG Monitor',
        },
        unit_amount: 12,
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: 'usd',
        // extract values stored from the database
        product_data: {
          name: 'LG Keyboard',
        },
        unit_amount: 20,
      },
      quantity: 3, THIS REPRESENTS uniqueProducts VALUE
    },
  ]
*/
  const session = await stripe.checkout.sessions.create({
  line_items:purchaseProduct,
  //  [
  //   {
  //     price_data: {
  //       currency: 'usd',
  //       // extract values stored from the database
  //       product_data: {
  //         name: 'Monitors',
  //       },
  //       unit_amount: 12,
  //     },
  //     quantity: 1,
  //   },
  // ],
  mode: 'payment',
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
});

router.delete('/:id', withAuth, (req, res) => {
  ProductOrder.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProductOrderData => {
      if (!dbProductOrderData) {
        res.status(404).json({ message: 'No ProductOrder found with this id!' });
        return;
      }
      res.json(dbProductOrderData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
