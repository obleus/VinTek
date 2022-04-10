const router = require('express').Router();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

router.get('/success', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
});

module.exports = router;