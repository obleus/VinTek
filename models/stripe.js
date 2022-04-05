const { Router } = require('express');

const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);


Router.post('/payment', (req,res)=> {
    stripe.charges.create({
        source:req.body.tokenId
    })
})

module.exports = router;




