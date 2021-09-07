'use strict';

const { dynamize } = require('../../../libs/aws');
const schema = require('./schema');

schema.forEach((key) => {
  dynamize.model(key.TableName, key);
});

module.exports = dynamize.models;
