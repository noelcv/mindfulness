'use strict';

const events = require('../models/model');
const UserModel = require('../models/usermodel');

exports.findAllEvents = async (req, res) => {
  try {
    const allEvents = await events.find();
    res.status(200);
    res.send(allEvents);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.addEvent = async (req, res) => {
  try {
    await events.create(req.body);
    res.status(201);
    res.send();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const userProfile = await UserModel.findById(req.params.id);
    res.status(200);
    res.send(userProfile);
  } catch (err) {
      console.log(err);
      res.sendStatus(500);
  }
}

exports.getAllProfiles = async(req, res) => {
  try {
    const allProfiles = await UserModel.find();
    res.status(200);
    res.send(allProfiles);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
} 


exports.createProfile = async (req, res) => {
  try {
    await UserModel.create(req.body);
    res.status(201);
    console.log(res)
    res.send();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}


exports.editProfile = async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200);
    res.send();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
