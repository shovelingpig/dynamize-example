'use strict';

const AWS = require('aws-sdk');
const https = require('https');
const { Dynamize } = require('dynamize');

const agent = new https.Agent({
  maxSocket: 256,
  keepAlive: true,
  rejectUnauthorized: true,
});

AWS.config.update({
  region: process.env.AWSRegion,
  httpOptions: { agent },
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretAccessKey,
});

const ddb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

const dynamize = new Dynamize({
  region: process.env.AWSRegion,
  httpOptions: { agent },
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretAccessKey,
});

exports.dynamize = dynamize;
exports.ddb = ddb;
exports.docClient = docClient;
