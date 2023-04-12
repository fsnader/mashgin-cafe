const express = require('express');
const cors = require('cors');
const routes = require('./api');
const app = express();

const DEFAULT_API_ROUTE = '/api';

app.use(cors());
app.use(express.json());
app.use('/images', express.static('public/images'));

app.use(DEFAULT_API_ROUTE, routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
