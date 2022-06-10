// 'use strict';

// const events = require('../models/model');

// //TODO: Define Schema and Connection to Database

// exports.findAllEvents = async (req, res) => {
//   try {
//     const allEvents = await events.find();
//     res.status(200);
//     res.send(allEvents);
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// exports.addEvent = async (req, res) => {
//   try {
//     await events.create(req.body);
//     res.status(201);
//     res.send();
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// };