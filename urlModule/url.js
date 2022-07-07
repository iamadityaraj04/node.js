var url=require('url');
var add='https://www.w3schools.com/nodejs/default.asp';
var q=url.parse(add,true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'