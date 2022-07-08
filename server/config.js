const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  clientPath: __dirname + '../client',
  PORT: process.env.PORT,
  URI: process.env.MONGODB_URI
}