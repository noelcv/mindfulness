'use strict';
const router = require('express').Router();
const controllers = require('./controllers/controllers');

router.get('/api/events', controllers.findAllEvents);
router.post('/api/events', controllers.addEvent);
// router.get('*', controllers.routesHandler);

module.exports = router;
