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

const EventModel = mongoose.model('EventModel', eventSchema);

module.exports = EventModel;
