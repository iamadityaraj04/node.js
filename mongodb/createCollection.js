var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/KM034";
MongoClient.connect(url,{useUnifiedTopology: true}, function (err,db) {
    if(err) throw err;
    var dbo=db.db("KM034");
    dbo.createCollection("Exam_Data", function (err,res) {
        if(err) throw err;
        console.log("Collection created");
        db.close();
    });
});