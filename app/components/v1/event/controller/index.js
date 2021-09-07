'use strict';

const eventService = require('../service');

exports.createEventLog = async function createEventLog(req, res) {
  const eventLog = req.body;
  await eventService.createEventLog(eventLog);
  res.status(201).send('Event Log Created');
};

exports.getEventLogs = async function getEventLogs(req, res) {
  const { eventId, startDate, endDate } = req.query;
  const eventLogs = await eventService.getEventLogs(eventId, startDate, endDate);
  res.status(200).send(eventLogs);
};

exports.getAllEventLogs = async function getAllEventLogs(req, res) {
  const eventLogs = await eventLogDDB.getAllEventLogs();
  res.status(200).send(eventLogs);
};

exports.getEventLog = async function getEventLog(req, res) {
  const { eventId, userId } = req.query;
  const eventLog = await eventLogDDB.getEventLog(eventId, userId);  
  res.status(200).send(eventLog);
};

exports.deleteEventLog = async function deleteEventLog(req, res) {
  const { eventId, userId } = req.query;
  await eventLogDDB.deleteEventLog(eventId, userId);
  res.status(200).send('Event Log Deleted');
};