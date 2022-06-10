'use strict';
const router = require('express').Router();
const controllers = require('./controllers/controllers');

//TODO: create controllers;
router.get('/events', controllers.findAllEvents);
router.post('/events', controllers.addEvent);
module.exports = router;
