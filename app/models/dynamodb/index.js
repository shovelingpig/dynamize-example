'use strict';

const schema = require('./schema');
const { dynamize } = require('../../../libs/aws');

schema.forEach((key) => {
  dynamize.model(key.TableName, key);
});

module.exports = dynamize.models;
