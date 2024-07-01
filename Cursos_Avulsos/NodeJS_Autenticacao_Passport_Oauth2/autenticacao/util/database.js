const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoURI = 'mongodb://localhost:27017/';

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(mongoURI)
    .then((client) => {
      console.log('Connection to MongoDB successful!');
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
