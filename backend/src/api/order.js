const submitOrder = require('../services/submitOrder');

const express = require('express');
const router = express.Router();

router.post('/order', async (req, res) => {
  const { items, paymentInfo } = req.body;

  const { order, errors } = await submitOrder(items, paymentInfo);

  if (errors) {
    return res.status(400).json({error: 'Invalid data'});
  }

  res.status(201).json(order);
});

module.exports = router;
