const BASE_URL = 'http://localhost:3000';

async function submitOrder(paymentInfo, items) {
  const data = await fetch(`${BASE_URL}/api/order`, {
    method: 'POST',
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify({
      paymentInfo,
      items
    })
  });
  return await data.json();
}

export default {
  submitOrder,
}
