'use strict';

const {URI} = require('../config');

const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(`${URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Mongoose connection established`
    );
  } catch (error) {
    console.log(error);
  }
})();

module.exports = mongoose;
