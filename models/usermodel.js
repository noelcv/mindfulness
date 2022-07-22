'use strict';
const mongoose = require('./index');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {type: String},
  name: {type: String},
  email: {type: String},
  location: {type: String},
  job: {type: String},
  expertise: {type: String},
  paymentLink: {type: String},
  phoneNumber: {type: String},
  billingAddress: {type: String},
  vatNumber: {type: String},
  extLink: {type: String}
})

const UserModel = mongoose.model('UserModel', userSchema);

module.exports =  UserModel ;
