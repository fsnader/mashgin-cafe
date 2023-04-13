const data = require('./data');

async function getItems(categoryId = null) {
  // Here we would call a database in a real application
  // This is exemplified here as loading data from the data.js constant
  const items = data.items;

  if (!categoryId) {
    return items;
  }

  return items.filter((i) => i.category_id === categoryId);
}

async function getCategories() {
  // Here we would call a database in a real application.
  // This is exemplified here as loading data from the data.js constant
  return data.categories;
}

module.exports = {
  getItems,
  getCategories
}
