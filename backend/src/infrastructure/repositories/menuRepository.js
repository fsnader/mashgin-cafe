const data = require('./data');

async function getItems(categoryId = null) {

  const items = data.items;

  if (!categoryId) {
    return items;
  }

  return items.filter((i) => i.category_id === categoryId);
}

async function getCategories() {
  return data.categories;
}

module.exports = {
  getItems,
  getCategories
}
