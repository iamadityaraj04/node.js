var express=require('express');
var app=express();
app.get('/',function (req,res) {
    res.download('test.txt',function (err) {
        if(err){
            console.log("File does not exitst");
        }else{
            console.log("File downloaded successfully");
        }
    });
});
app.listen(2000);