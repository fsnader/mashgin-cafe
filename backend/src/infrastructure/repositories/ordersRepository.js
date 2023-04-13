async function saveOrder(order) {
  // Here we would call a database to save the order.
  // This logic is being simplified here by this console.log() call
  console.log(`Saving order in the database`, order);
}

module.exports = {
  saveOrder,
}
