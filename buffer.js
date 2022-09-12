// const buf1=Buffer.from('This is Node.js class');
// const buf2=Buffer.from('54686973206973204e6f64652e6a7320636c617373','hex');
// console.log(buf2.toString());
// console.log(buf1.toString('hex'));

var buf1=Buffer.from('wow');
var buf2=Buffer.from('hell');
var buf3=Buffer.concat([buf1,buf2],8);
console.log("The contents are "+buf3.toString());