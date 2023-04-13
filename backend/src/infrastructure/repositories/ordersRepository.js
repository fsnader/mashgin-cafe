const fs = require('fs/promises');

const appendToFile = async (order) => {
  await fs.appendFile(
    'data/received-orders.json',
    `${JSON.stringify(order)}\n`);
};

async function saveOrder(order) {
  // Here we would call a database to save the order.
  // This logic is being simplified here by saving it to data/received-orders.json
  console.log(`Saving order in the database`, order);
  await appendToFile(order);
}

module.exports = {
  saveOrder,
}
