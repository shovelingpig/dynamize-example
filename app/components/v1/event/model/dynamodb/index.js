'use strict';

const fs = require('fs');
const path = require('path');
let modules = {};

fs.readdirSync(__dirname).forEach((m) => {
  const filePath = path.join(__dirname, m);
  if (fs.existsSync(filePath)) {
    modules = Object.assign(modules, require(filePath));
  }
});

module.exports = modules;
