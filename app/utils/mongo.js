'use strict';

const MongoDB = require('@pick-star/cli-mongodb');

const { mongodbUrl, mongodbDbName } = require('../../config/db');

function mongodb() {
  return new MongoDB(mongodbUrl, mongodbDbName);
}

module.exports = mongodb;
