import httpClient from "@/services/httpClient";

async function listItems(categoryId = null) {
  const url = categoryId
    ? `/api/menu/items?${new URLSearchParams({categoryId})}`
    : '/api/menu/items'

  return httpClient.get(url);
}

function getImageUrl(imageId) {
  return `${httpClient.baseUrl}/images/${imageId}.jpg`
}

async function listCategories() {
  return httpClient.get('/api/menu/items');
}

export default {
  listItems,
  getImageUrl,
  listCategories,
}
