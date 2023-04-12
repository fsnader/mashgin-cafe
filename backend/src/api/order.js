const submitOrder = require('../services/submitOrder');

const express = require('express');
const router = express.Router();

router.post('/order', async (req, res) => {
  const { items, payment } = req.body;

  const order = await submitOrder(items, payment);

  res.status(201).json(order);
});

module.exports = router;
