var http=require('http');
var fs=require('fs');
var server=http.createServer();

server.on('request',(req,res)=>{
    if(req.url=='/'){
        fs.readFile('./index.html',(err,html)=>{
            if(err){
                console.error(err);
            }
            res.write(html);
            res.end();
        })
    }
});
server.listen(2200);