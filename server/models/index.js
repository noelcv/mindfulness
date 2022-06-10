'use strict';



const db_url = process.env.DB_URL;
const db_name = process.env.DB_NAME;

const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(`${db_url}/${db_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Mongoose connection established at ${db_url}}/${db_name}`
    );
  } catch (error) {
    console.log(error);
  }
})();

module.exports = mongoose;
