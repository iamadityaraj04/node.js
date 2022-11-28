
const fs=require("fs");
const http=require("http");
const zlib=require('zlib');
const server=http.createServer();

//getting data using file system

server.on('request',(req,res)=>{
//     fs.readFile('input.txt',(err,data)=>{
//         if(err){
//             console.err(err);
//         }
//         res.write(data.toString());
//         res.end();
//     })
// })

//getting data using stream
// var data='';

//     const rstream=fs.createReadStream('input.txt');

//     rstream.on("data",(chunk)=>{
//         data+=chunk;
//     });
//     rstream.on("end",()=>{
//         console.log(data);
//     });
//     rstream.on("error",(err)=>{
//         console.log(err);


//     const rstream=fs.createReadStream('input.txt');
//     const wstream=fs.createWriteStream('output.txt');
//     rstream.pipe(wstream);

    // const rstream=fs.createReadStream('input.txt');
    // const wstream=fs.createWriteStream('out.txt.zip');
    // rstream.pipe(zlib.createGzip()).pipe(wstream);
    //fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('out.txt.zip'));
    //console.log('file compressed');
    
    fs.createReadStream('out.txt.zip').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input1.txt'));
    console.log('file decompressed');
});

server.listen(3000,()=>{
    console.log("server started at localhost 3000....");
});