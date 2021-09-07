'use strict';

const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Dynamize Example Server');
});

require('../routes')(app);

const port = process.env.Port || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
