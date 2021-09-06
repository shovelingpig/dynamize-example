'use strict';

const fs = require('fs');
const path = require('path');

const result = [];

fs.readdirSync(__dirname).forEach((f) => {
  if (f === 'index.js') return;
  const filePath = path.join(__dirname, f);
  const requireResult = require(filePath);
  if (!requireResult || !requireResult.TableName) return;
  result.push(requireResult);
});

module.exports = result;