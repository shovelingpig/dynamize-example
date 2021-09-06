'use strict';

const eventService = require('../service');

exports.createEventLog = async function createEventLog(req, res) {
  const { eventLog } = req.body;
  await eventService.createEventLog(eventLog);
  res.status(201).send('Event Log Created');
};

exports.getEventLogs = async function getEventLogs(req, res) {
  const eventLogs = await eventService.getEventLogs();
  res.status(200).send(eventLogs);
};
