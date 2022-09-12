var fs=require('fs');

//asyncronous
// fs.readFile('Input.txt',function (err,data) {
//     if(err){
//         return console.error(err);
//     }
//     console.log("Asyncronous Read: " +data.toString());
// })

//syncronous
// var data=fs.readFileSync('input.txt');
// console.log('Syncronous read: '+data.toString());

//writing data in P1.json file
// let student = {
// name: 'Mike',
// age: 23,
// gender: 'Male',
// department: 'English',
// car: 'Honda'
// };
// let data = JSON.stringify(student);
// fs.writeFileSync('P1.json', data);

//reading the above json file
// let rawdata = fs.readFileSync('P1.json');
// let student = JSON.parse(rawdata);
// console.log(student);
// console.log(rawdata);

var data = '';
// Create a readable stream
var reader = fs.createReadStream('test.txt');
// Set the encoding to be utf8.
reader.setEncoding('UTF8');
// Handle stream events --> data, end, and error
reader.on('data', function(chunk) {
data = chunk;
});
reader.on('end',function() {
console.log(data);
});
reader.on('error', function(err) {
console.error(err);
});


/*var data = 'This is node.js class';
// Create a writable stream
var writer = fs.createWriteStream('test.txt');
// Write the data to stream with encoding to be utf8
writer.write(data,'UTF8');
// Mark the end of file
writer.end();
// Handle stream events --> finish, and error
writer.on('finish', function() {
console.log("Write completed.");
});
writer.on('error', function(err) {
console.error(err);
});*/