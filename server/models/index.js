'use strict';

const {DB_URL, DB_NAME} = require('../config');

const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(`${DB_URL}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Mongoose connection established at ${DB_URL}}/${DB_NAME}`
    );
  } catch (error) {
    console.log(error);
  }
})();

module.exports = mongoose;
