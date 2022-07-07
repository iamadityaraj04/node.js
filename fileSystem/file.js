//file system module - provided by default by node.js
const fs=require('fs');

//used to create file
fs.writeFileSync('fileCreate.txt','This is a new file');//first parameter is filename and second is content of file.

//use to remove file
//fs.unlinkSync('fileCreate.txt');

//use to remove directory
fs.rmdir('directoryName');