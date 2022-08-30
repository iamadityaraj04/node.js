var fs=require('fs');

//asyncronous
// fs.readFile('Input.txt',function (err,data) {
//     if(err){
//         return console.error(err);
//     }
//     console.log("Asyncronous Read: " +data.toString());
// })

//syncronous
var data=fs.readFileSync('input.txt');
console.log('Syncronous read: '+data.toString());

