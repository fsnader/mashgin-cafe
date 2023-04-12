const express = require('express');
const router = express.Router();

const menuRepository = require("../infrastructure/repositories/menuRepository");

const getCategoryId = (req) => {
  const { categoryId } = req.query;

  return categoryId ? parseInt(categoryId) : null;
}

router.get('/menu/items', async (req, res) => {
  const categoryId = getCategoryId(req);

  console.log(categoryId);
  const items = await menuRepository.getItems(categoryId);

  res.json(items);
});

router.get('/menu/categories', async (req, res) => {
  const categories = await menuRepository.getCategories();

  res.json(categories);
});

module.exports = router;
