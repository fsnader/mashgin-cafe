const BASE_URL = 'http://localhost:3000';
async function get(url) {
  const data = await fetch(`${BASE_URL}${url}`);

  return await data.json();
}

async function post(url, body) {
  const data = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(body)
  });

  return await data.json();
}

export default {
  baseUrl: BASE_URL,
  get,
  post
}
