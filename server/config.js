const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  clientPath: __dirname + '../client',
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  DB_NAME: process.env.DB_NAME
}