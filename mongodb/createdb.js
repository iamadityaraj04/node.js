var MongoClient =require('mongodb').MongoClient;
var url= "mongdb://localhost:27017/KM034";
MongoClient.connect(url, {useUndefinedTopology: true},function (err,db) {
    if(err)throw err;
        
})