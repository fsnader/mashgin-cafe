async function processPayment(paymentInfo, value) {
  // Here we would call an external service that properly validates the payment
  // This logic is being simplified here by this console.log() call
  console.log('Processing payment', paymentInfo, value)
  return true
}

module.exports = {
  processPayment,
}
