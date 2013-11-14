var MG = require('mongodb');
var Db = MG.Db;
var Connection = MG.Connection;
var Server = MG.Server;

module.exports = new Db('test', new Server('localhost', Connection.DEFAULT_PORT, {}));