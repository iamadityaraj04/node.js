var http=require('http');
var server=http.createServer(function (req,res) {
    if(req.url=='/'){
        res.write("Welcome to Index page");
        res.end();
    }else if(req.url=='/emp'){
        res.write("Welcome to Employee page");
        res.end();
    }else if(req.url=='/admin'){
        res.write("Welcome to Admin page");
        res.end();
    }else{
        res.write("Invalid Request!");
        res.end();
    }
});
server.listen(2020);
console.log('Server is running at port 2020');