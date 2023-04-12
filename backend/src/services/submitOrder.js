const paymentGateway = require("../infrastructure/gateways/paymentsGateway");
const ordersRepository = require("../infrastructure/repositories/ordersRepository");

module.exports = async function processOrder(items, payment) {

  if (!items || !payment) {
    // Throw error
    // return res.status(400).json({error: 'Invalid data'});
  }

  const order = {
    id: new Date().getTime(),
    items,
    payment,
  };

  const paymentSuccess = await paymentGateway.processPayment(payment);

  if (!paymentSuccess) {
    // Throw error
    return null;
  }

  await ordersRepository.saveOrder(order);

  return order;
}
