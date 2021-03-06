'use strict';

const fs = require('fs');
const path = require('path');


module.exports = function collectRouters(app) {
  const versionList = ['/v1/'];

  versionList.forEach((v) => {
    const versionDirPath = path.join(__dirname, '../components', v);
    fs.readdirSync(versionDirPath).forEach((f) => {
      const routerFilePath = path.join(versionDirPath, f, 'route/index.js');
      if (fs.existsSync(routerFilePath) && fs.lstatSync(routerFilePath).isFile()) {
        const cleanedPath = path.join(v, f).replace(/\\/g, '/');
        app.use(cleanedPath, require(routerFilePath))
      }
    });
  });
};
