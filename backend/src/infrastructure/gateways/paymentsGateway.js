async function processPayment(paymentInfo) {
  // Here we would call an external service that properly validates the payment
  // This logic is being simplified here by this console.log() call
  console.log('Processing payment', paymentInfo)
  return true
}

module.exports = {
  processPayment,
}
