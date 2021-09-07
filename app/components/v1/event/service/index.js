'use strict';

const eventLogDDB = require('../model/dynamodb');

exports.createEventLog = async function createEventLog(eventLog) {
    await eventLogDDB.createEventLog(eventLog);
};

exports.getEventLogs = async function getEventLogs(eventId, startDate, endDate) {
    return await eventLogDDB.getEventLogs(eventId, startDate, endDate);
};

exports.getAllEventLogs = async function getAllEventLogs() {
    return await eventLogDDB.getAllEventLogs();  
};

exports.getEventLog = async function getEventLog(eventId, userId) {
    return await eventLogDDB.getEventLog(eventId, userId);  
};
  
exports.deleteEventLog = async function deleteEventLog(eventId, userId) {
    await eventLogDDB.deleteEventLog(eventId, userId);
};