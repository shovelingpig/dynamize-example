'use strict';

const express = require('express');

app = express();

require('../routes')(app);

app.listen(process.env.Port);