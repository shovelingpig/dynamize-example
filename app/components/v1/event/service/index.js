'use strict';

const eventDDB = require('../model/dynamodb');

exports.createEventLog = async function createEventLog(eventLog) {
    await eventDDB.createEventLog(eventLog);
};

exports.getEventLogs = async function getEventLogs() {
    return await eventDDB.getEventLogs();
};
