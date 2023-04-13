const paymentGateway = require("../infrastructure/gateways/paymentsGateway");
const ordersRepository = require("../infrastructure/repositories/ordersRepository");

const errorResult = (errors) => ({
  order: null,
  errors
})

const successResult = (order) => ({
  order,
  errors: null,
})

module.exports = async function processOrder(items, payment) {

  if (!items || !payment) {
    return errorResult( 'Invalid data');
  }

  const order = {
    id: new Date().getTime(),
    items,
    payment,
  };

  const paymentSuccess = await paymentGateway.processPayment(payment);

  if (!paymentSuccess) {
    return errorResult('Payment error');
  }

  await ordersRepository.saveOrder(order);

  return successResult(order);
}
