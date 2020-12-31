const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const mongoDbUrl = 'mongodb+srv://dev:8sJDGNsPDMFSlDL1@cluster0.ivjp2.mongodb.net/shop?retryWrites=true&w=majority';

let _db;

const initDb = callback => {
    if (_db) {
        console.log("Database is alredy initialzed!");
        return callback(null, _db);
    }
    MongoClient.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(client => {
            _db = client;
            callback(null, _db);
        })
        .catch(err => {
            callback(err);
        });

};

const getDb = () => {
    if (!_db) {
        throw Error('Database not initialized');
    }
    return _db;
}

module.exports = {
    initDb,
    getDb
};