'use strict';

const router = require('express').Router();

const { createEventLog, getEventLogs } = require('../controller');

router.post('/', createAccount);
router.get('/', getEventLogs);
