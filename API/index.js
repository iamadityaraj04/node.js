const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\ json '})
    res.write(JSON.stringify({
        name:'Aditya Raj',
        regNo: 11911045,
        email: 'adityarohitraj@gmail.com',
        mobNo: 123456789
    }));
    res.end( );
}).listen(5000);