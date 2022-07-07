//this can be executed by simply running node "filename" in command prompt
//node is use to execute code directly by writing in command prompt
//.exit is used to exit from writing window

/* console.log("hello world!"); */


/* const fs=require("fs");//allows to work with the file system on your computer.
fs.copyFileSync("file1.txt", "copiedFile.txt");//"fs.copyFileSync()" function is used to copy file and their content */

//'npm init' used to initialize a package file name as 'package.json'
//using 'npm install superheroes', superheroes package has been downloaded.
var superhero=require("superheroes"); //'require()' is for using package.
var myHero=superhero.random(); //this will store a random super hero name
console.log(myHero);

