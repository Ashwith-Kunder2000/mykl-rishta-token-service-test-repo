require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./db');

const PORT = process.env.PORT || 3001;

sequelize
  .authenticate()
  .then(() => {
    console.log('[token-service] DB connection established.');
    app.listen(PORT, () => {
      console.log(`[token-service] Running on port ${PORT} — env: ${process.env.NODE_ENV}`);
    });
  })
  .catch((err) => {
    console.error('[token-service] Unable to connect to DB:', err.message);
    process.exit(1);
  });