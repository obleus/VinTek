// const router = require('express').Router();
// const { ProductOrder } = require('../../models');
// const withAuth = require('../../utils/auth');


// // Create a session, then refrence the session after ProductOrder.
// router.get('/', (req, res) => {
//   ProductOrder.findAll()
//     .then(dbProductOrderData => res.json(dbProductOrderData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.post('/', withAuth, (req, res) => {
//   // expects => {ProductOrder_text: "This is the ProductOrder", user_id: 1, post_id: 2}
//   ProductOrder.create({
//     ProductOrder_text: req.body.ProductOrder_text,
//     user_id: req.session.user_id,
//     post_id: req.body.post_id
//   })
//     .then(dbProductOrderData => res.json(dbProductOrderData))
//     .catch(err => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// router.delete('/:id', withAuth, (req, res) => {
//   ProductOrder.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbProductOrderData => {
//       if (!dbProductOrderData) {
//         res.status(404).json({ message: 'No ProductOrder found with this id!' });
//         return;
//       }
//       res.json(dbProductOrderData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
