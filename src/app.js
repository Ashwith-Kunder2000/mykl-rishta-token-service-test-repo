const express = require('express');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tokens', tokenRoutes);

module.exports = app;