'use strict';
const mongoose = require('./index');
const Schema = mongoose.Schema;

//define Schema
const eventSchema = new Schema({
  id: {type: String},
  title: {type: String, required: true},
  date: {type: String, required: true},
  classroomId: {type: String}, //only generated for online events
  location: {type: String}, //only for offline events 
});

const userSchema = new Schema({
    uid: {type: String},
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

const EventModel = mongoose.model('EventModel', eventSchema);
const UserModel = mongoose.model('UserModel', userSchema);

module.exports = {EventModel, UserModel};
