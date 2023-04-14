import httpClient from "@/services/httpClient";

async function submitOrder(paymentInfo, items) {
  const data = await httpClient.post('/api/order', {
    paymentInfo,
    items
  });

  return await data;
}

export default {
  submitOrder,
}
