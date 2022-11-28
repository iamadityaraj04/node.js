const fs=require('fs');
const url=require('url');
const path=require('path');
const http=require('http');
const server=http.createServer();

server.on('request',(req,res)=>{
    fs.writeFileSync('index.txt',"Name - Aditya Raj Roll No. - 22");
    
    var q=url.parse(req.url,true);
    var path1=q.basename(q);
    console.log(path1);

    fs.readFile(`${path1}`,(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data);
    });
    
})

server.listen(7000);