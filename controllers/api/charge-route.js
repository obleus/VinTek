const router = require('express').Router();
const { Charge } = require('../../models');


router.post("/charge", (req, res) => {
    try {
      stripe.customers
        .create({
          name: req.body.name,
          email: req.body.email,
          source: req.body.stripeToken
        })
        .then(customer =>
          stripe.charges.create({
            amount: req.body.amount * 100,
            currency: "usd",
            customer: customer.id
          })
        )
        .then(() => res.render("completed.html"))
        .catch(err => console.log(err));
    } catch (err) {
      res.send(err);
    }
  });
  
  module.exports = router;
  