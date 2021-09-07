'use strict';

const router = require('express').Router();
const { asyncWrapper } = require('../../../../routes/wrapper');

const { createEventLog, getEventLogs } = require('../controller');

router.post('/', asyncWrapper(createEventLog));
router.get('/', asyncWrapper(getEventLogs));

module.exports = router;
