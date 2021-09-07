'use strict';

const { EventLogs } = require('../../../../../models/dynamodb');

exports.createEventLog = async function createEventLog(eventLog) {
  await EventLogs.create(eventLog);
};

exports.getEventLogs = async function getEventLogs(eventId, startDate, endDate) {
  return await EventLogs.find({ eventId: { eq: eventId }, date: { between: [startDate, endDate] } });  
};

exports.getAllEventLogs = async function getAllEventLogs() {
  return await EventLogs.scan();  
};

exports.getEventLog = async function getEventLog(eventId, userId) {
  return await EventLogs.findOne({ eventId: { eq: eventId }, userId: { eq: userId } });  
};

exports.deleteEventLog = async function deleteEventLog(eventId, userId) {
  await EventLogs.delete({ eventId: { eq: eventId }, userId: { eq: userId } });  
};