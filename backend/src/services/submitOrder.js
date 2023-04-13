const getTotalFromItems = require("./getTotalFromItems");
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

module.exports = async function processOrder(items, paymentInfo) {

  if (!items || !paymentInfo) {
    return errorResult( 'Invalid data');
  }

  const totalAmount = getTotalFromItems(items);

  const order = {
    id: new Date().getTime(),
    items,
    totalAmount,
    paymentInfo,
  };

  const paymentSuccess = await paymentGateway.processPayment(paymentInfo, totalAmount);

  if (!paymentSuccess) {
    return errorResult('Payment error');
  }

  await ordersRepository.saveOrder(order);

  return successResult(order);
}
