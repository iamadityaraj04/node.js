var express=require('express');
var app=express();
var myLogger=function(req,res,next){
    console.log('LOGGED');
    next();
}
app.use(myLogger);
app.get('/', function (req,res) {
    res.send("This is a middleware."); 
})
app.listen(3000);