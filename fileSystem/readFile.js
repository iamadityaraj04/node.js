var fs = require('fs');
 
// read file abc.html
fs.readFile('abc.html',
    // callback function that is called when reading file is done
    function(err, data) {       
        if (err) throw err;
        // data is a buffer containing file content
        console.log(data.toString('utf8'));
});

//writeFile()
/* fs.writeFile('abc.html',"Learn how to create file through append",
    function(err) {       
        if (err) throw err;
        console.log("File has been created!");
}); */

//appendFile()
/* fs.appendFile('abc.html',"Learn how to create file through append",
    function(err) {       
        if (err) throw err;
        console.log("File has been created!");
}); */

//openFile()
/* fs.open('xyz.txt','w',function(err,file){
    if(err) throw err;
    console.log("file has opened in write mode");
}); */
