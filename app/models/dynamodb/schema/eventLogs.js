'use strict';

const { ddb } = require('../../../../libs/aws');

const params = {
  TableName: 'event_logs',
  KeySchema: [
    { AttributeName: 'eventId', KeyType: 'HASH' },
    { AttributeName: 'userId', KeyType: 'RANGE' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'eventId', AttributeType: 'S' },
    { AttributeName: 'userId', AttributeType: 'S' },
    { AttributeName: 'date', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  LocalSecondaryIndexes: [
    {
      IndexName: 'eventId-date-index',
      KeySchema: [
        { AttributeName: 'eventId', KeyType: 'HASH' },
        { AttributeName: 'date', KeyType: 'RANGE' },
      ],
      Projection: {
        ProjectionType: 'ALL',
      },
    },
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'userId-date-index',
      KeySchema: [
        { AttributeName: 'userId', KeyType: 'HASH' },
        { AttributeName: 'date', KeyType: 'RANGE' },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      Projection: {
        ProjectionType: 'ALL',
      },
    },
  ],
};

ddb.createTable(params, (err, data) => {
  if (err && !/^Table already/.test(err.message)) {
    console.error(`${params.TableName} Unable to create table. Error JSON: ${JSON.stringify(err, null, 2)}`);
  } else if (!err) {
    console.log(`Created table. Table description JSON:  ${JSON.stringify(data, null, 2)}`);
  }
});

module.exports = params;
