var Taffy = require('taffydb/taffy').taffy;

module.exports = {
    initData: function(data, dbName){
        var db = Taffy();
        db.store(dbName)
        db().remove();
        db.insert(data);
        return db;
    }
};