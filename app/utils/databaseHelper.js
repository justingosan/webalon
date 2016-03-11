var PouchDB = require('pouchdb');

module.exports = {
    initData: function(data, dbName, cb){
        var db = new PouchDB('webalon');
        db.put(data, dbName, cb);
        return db;
    }
};