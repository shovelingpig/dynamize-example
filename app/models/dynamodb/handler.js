'use strict';

const doc = require('../../../libs/aws').docClient;

module.exports = TableName => ({
  async put(Item) {
    try {
      await doc.put({
        TableName,
        Item,
      }).promise();
    } catch (ce) {
      ce.tableName = TableName;
      return Promise.reject(ce);
    }
  },

  async get(Key, PE, EAN) {
    const params = {
      TableName,
      Key,
    };

    if (PE) params.ProjectionExpression = PE;
    if (EAN) params.ExpressionAttributeNames = EAN;

    try {
      const data = await doc.get(params).promise();

      if (data && data.Item) return data.Item;
    } catch (ce) {
      ce.tableName = TableName;
      return Promise.reject(ce);
    }
  },

  async query({
    KCE, EAV, EAN, Limit, PE, SIF, IDN, FE, LEK,
  }) {
    const params = {
      TableName,
      KeyConditionExpression: KCE,
      ExpressionAttributeValues: EAV,
    };

    if (Limit) params.Limit = Limit;
    if (PE) params.ProjectionExpression = PE;
    if (SIF === false) params.ScanIndexForward = SIF;
    if (EAN) params.ExpressionAttributeNames = EAN;
    if (IDN) params.IndexName = IDN;
    if (FE) params.FilterExpression = FE;
    if (LEK) params.ExclusiveStartKey = LEK;
    try {
      const data = await doc.query(params).promise();

      if (data && data.Items && data.LastEvaluatedKey) {
        data.Items.next = async () => await this.query({
          KCE, EAV, EAN, Limit, PE, SIF, IDN, FE, LEK: data.LastEvaluatedKey,
        });
      }
      if (data && data.Items && data.Items.length) return data.Items;
      return [];
    } catch (ce) {
      ce.tableName = TableName;
      return Promise.reject(ce);
    }
  },

  async set(params) {
    const {
      Key,
      data,
    } = params;
    const updatedFields = Object.keys(data);
    const AU = {};

    updatedFields.forEach((uf) => {
      const Value = data[uf];

      if (Value === undefined || Value === null || Value === '') {
        AU[uf] = { Action: 'DELETE' };
        return;
      }

      AU[uf] = { Action: 'PUT', Value };
    });

    try {
      await doc.update({
        TableName,
        Key,
        AttributeUpdates: AU,
      }).promise();
    } catch (ce) {
      ce.tableName = TableName;
      return Promise.reject(ce);
    }
  },

  async setAndIncrease(params) {
    const {
      Key,
      data,
      increasingFields,
    } = params;
    const updatedFields = Object.keys(data);
    const AU = {};

    updatedFields.forEach((uf) => {
      const Value = data[uf];

      if (Value === undefined || Value === null || Value === '') {
        AU[uf] = { Action: 'DELETE' };
        return;
      }

      if (increasingFields.indexOf(uf) < 0) {
        AU[uf] = { Action: 'PUT', Value };
      } else {
        AU[uf] = { Action: 'ADD', Value };
      }
    });
    try {
      await doc.update({
        TableName,
        Key,
        AttributeUpdates: AU,
      }).promise();
    } catch (ce) {
      ce.tableName = TableName;
      return Promise.reject(ce);
    }
  },

  async delete(Key) {
    try {
      await doc.delete({
        TableName,
        Key,
      }).promise();
    } catch (ce) {
      ce.tableName = TableName;
      return Promise.reject(ce);
    }
  },
});
