'use strict';
const router = require('express').Router();
const controllers = require('./controllers/controllers');

router.get('/events', controllers.findAllEvents);
router.post('/events', controllers.addEvent);
// router.get('*', controllers.routesHandler);

module.exports = router;
