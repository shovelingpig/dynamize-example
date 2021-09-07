'use strict';

const eventService = require('../service');

exports.createEventLog = async function createEventLog(req, res) {
  const eventLog = req.body;
  await eventService.createEventLog(eventLog);
  res.status(201).send('Event Log Created');
};

exports.getEventLogs = async function getEventLogs(req, res) {
  const { eventId, userId, startDate, endDate } = req.query;
  const eventLogs = await eventService.getEventLogs(eventId, userId, startDate, endDate);
  res.status(200).send(eventLogs);
};
