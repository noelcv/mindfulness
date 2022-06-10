const dotenv = require('dotenv');
dotenv.config();
console.log(process.env);

module.exports = {
  clientPath: __dirname + '../client',
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  DB_NAME: process.env.DB_NAME
}