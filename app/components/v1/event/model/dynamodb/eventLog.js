'use strict';

const { EventLog } = require('../../../../../models/dynamodb');

exports.createEventLog = async function createEventLog(eventLog) {
  await EventLog.create(eventLog);
};

exports.getEventLogs = async function getEventLogs(eventId, startDate, endDate) {
  return await EventLog.find({ eventId: { eq: eventId }, date: { between: [ startDate, endDate ] } });  
};
