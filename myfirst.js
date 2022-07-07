// creating a server

/* http module handle request and response in server */
var http = require('http');

/* it takes a function (can be arrow function ) as a parameter */
http.createServer((req, res)=> {
  //writing something as response
  res.write('Hello Aditya! How are you?');
  res.end();
}).listen(8000); 

