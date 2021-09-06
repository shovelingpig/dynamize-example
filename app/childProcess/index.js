'use strict';

const express = require('express');

app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Dynamize Example Server' });
});

require('../routes')(app);

app.listen(process.env.Port);
