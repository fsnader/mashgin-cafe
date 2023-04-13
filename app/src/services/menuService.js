const BASE_URL = 'http://localhost:3000';

async function listItems(categoryId = null) {
  const url = categoryId
    ? `${BASE_URL}/api/menu/items?${new URLSearchParams({categoryId})}`
    : 'http://localhost:3000/api/menu/items'

  const data = await fetch(url);

  return await data.json();
}

function getImageUrl(imageId) {
  return `${BASE_URL}/images/${imageId}.jpg`
}

async function listCategories() {
  const data = await fetch(`${BASE_URL}/api/menu/items`);
  return await data.json();
}

export default {
  listItems,
  getImageUrl,
  listCategories,
}
