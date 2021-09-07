'use strict';

const router = require('express').Router();

const { createEventLog, getEventLogs } = require('../controller');

router.post('/', createEventLog);
router.get('/', getEventLogs);

module.exports = router;
