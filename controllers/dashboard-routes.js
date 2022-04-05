// for the dashboard to display all orders

const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, ProductOrder } = require('../models');
const withAuth = require('../utils/auth');

// contains product-order-routes
// dashboard route so users can display their orders
// Create a session, then refrence the session after ProductOrder.

// find user by id
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'product_id',
      'order_id',
      'created_at',
      // might have done sequelize backwards
      [sequelize.literal('(SELECT COUNT(*) FROM productorder WHERE user.id = product.product_id)')]
    ],
    include: [
      {
        model: ProductOrder,
        attributes: ['id', 'product_id', 'order_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['email']
        }
      },
      {
        model: ProductOrder,
        attributes: ['product_id']
      }
    ]
  })
    // map the products
    // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    .then(dbProductData => {
      // callbackFn Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.
      const product = dbProductData.map(product => product.get({ plain: true }));
      res.render('dashboard', { product, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create product order

// Not going to be able to make edits to the order. We can if we want to `-_('.')_-` but all sales are final right?

// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findByPk(req.params.id, {
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['email']
//         }
//       },
//       {
//         model: User,
//         attributes: ['email']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });
        
//         res.render('edit-post', {
//           post,
//           loggedIn: true
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;
