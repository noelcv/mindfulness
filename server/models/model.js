'use strict';
const mongoose = require('./index');
const Schema = mongoose.Schema;

//define Schema
const eventSchema = new Schema({
  id: {type: String},
  classroomId: {type: String}, //only generated for online events
  classroomLocation: {type: String}, //only for offline events 
  title: {type: String, required: true},
  date: {type: String, required: true},
  venue: {type: String, required: true}
});

const EventModel = mongoose.model('EventModel', eventSchema);

module.exports = EventModel;
