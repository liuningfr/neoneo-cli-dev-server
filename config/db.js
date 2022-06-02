'use strict';

/** MONGODB **/
const mongodbUrl = 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true';
const mongodbDbName = 'neoneo-cli';

module.exports = {
  mongodbUrl,
  mongodbDbName,
};
