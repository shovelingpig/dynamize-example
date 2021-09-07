'use strict';

const { EventLogs } = require('../../../../../models/dynamodb');

exports.createEventLog = async function createEventLog(eventLog) {
  await EventLogs.create(eventLog);
};

exports.getEventLogs = async function getEventLogs(eventId, userId, startDate, endDate) {
  return await EventLogs.find({ eventId: { eq: eventId } });  
};
