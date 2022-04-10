const router = require('express').Router();
const { ProductOrder } = require('../../models');
const withAuth = require('../../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const YOUR_DOMAIN = 'http://localhost:3001';

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
  console.log(req.body)
  if (req.session.cart){
   if(req.session.cart.indexOf(req.body.productID) == -1){
     req.session.cart.push(req.body.productID)
     req.session.checkout.push({
      productID:req.body.productID,
      price_data: {
        currency:'usd',
        product_data: {
          name:req.body.productName
        },
        unit_amount:req.body.productPrice
      },
      quantity: 1
    })
   } else {
     req.session.checkout.forEach((element) => {
      if(element.productID == req.body.productID){
        element.quantity++
      }
     })
   }
  }
  else {
    req.session.cart = [req.body.productID]
    req.session.checkout = [{
      productID:req.body.productID,
      price_data: {
        currency:'usd',
        product_data: {
          name: req.body.productName
        },
        unit_amount:req.body.productPrice
      },
      quantity: 1
    }]
  }
    console.log(req.session.cart,req.session.checkout)
    res.send('success');
});

router.post('/create-checkout-session', async (req, res) => {
  /*process req.session.cart
  get all unique values. how many times product 3,4 show up.
  example 12 monitors.  */

  // var isUnique = function (arr) {
  //   let count = {}
  //   arr.forEach(element => {
  //     count[element] = (count[element] || 0) + 1
  //   })
  // return count
  // };

  // let uniqueProducts = isUnique (req.session.cart)
  // /* query products for uniqueProducts key and subtract unique productsvalue from productquantity */
  // uniqueProducts.find({}, (err, data) => {
  //   res.json(data);
  // })
  
  /* retrieve query information. add to line itemobject array */
  // let purchaseProduct = [] 
  // follow syntax of line item where each object is a product that a customer bought.

  let cartItems = req.session.checkout
  cartItems.forEach((element,index) => {
    delete element.productID
  })
  const session = await stripe.checkout.sessions.create({
    line_items: cartItems,
      // [
      // {
      //   price_data: {
      //     currency: 'usd',
      //     // extract values stored from the database
      //     product_data: {
      //       name: 'Dell Monitor',
      //     },
      //     unit_amount: 1200,
      //   },
      //   quantity: 1,
      // },
      // ],
      mode: 'payment',
      success_url: "views/success.handlebars",
      cancel_url: "views/cancel.handlebars",
    })
    res.redirect(303, session.url);
});

 /*example
  LOOK UP FOR IN LOOP, ALLOW YOU TO GRAB KEY AND VALUE
  THIS IS PURCHASE PRODUCT 
  [
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



// router.get(routes.restore, function(req, res) {
//   restore.crontabs(req.query.db, function(docs){
//     res.render('restore', {
//       routes : JSON.stringify(routes_relative),
//       crontabs : JSON.stringify(docs),
//       backups : crontab.get_backup_names(),
//       db: req.query.db
//     });
//   });
// });

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

// redirect success and cancel page html
// create js file to redirect from sucess.html back to homepage using setTimeout.
// delete the quantity from sql, clear use delete req.session.cart and req.session.checkout
/*  let cartItems = req.session.checkout
  cartItems.forEach((element,index) => {
    delete element.productID
})*/
