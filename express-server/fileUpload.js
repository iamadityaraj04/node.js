const express=require("express");
const multer=require("multer");
const app =express();
var storage=multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,"uploads");
    },

    filename:function (req,file,cb) {
        cb(null,file.fieldname+Date.now());
    }
})
const maxSize=1*1000*10000;
var upload=multer({
    storage:storage,
    limits:{
        fileSize:maxSize
    }
}).single("file");
app.get("/",function (req,res) {
    res.sendFile(__dirname+'/form.html');
})
app.post("/uploadFile",function (req,res,next) {
    upload(req,res,function (err) {
        if(err){
            res.send("File size is too large");
        }else{
            res.send("File uploaded successfully");
        }
    })
})
app.listen(4000,function(error){
    if (error) throw error
    else{
        console.log("Server started on PORT 4000");
    }
})