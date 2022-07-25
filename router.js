'use strict';
const router = require('express').Router();
const controllers = require('./controllers/controllers');

router.get('/api/events', controllers.findAllEvents);
router.post('/api/events', controllers.addEvent);

router.get('/api/user', controllers.getAllProfiles);
router.post('/api/user/create', controllers.createProfile);
router.put('/api/user/:id/edit', controllers.editProfile);
router.get('/api/user/:id', controllers.getProfileById);

router.put('/api/user/:id/settings/', controllers.editSettings);

module.exports = router;
