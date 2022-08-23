
// var x=[0,1,2,3,4,5,6,7,8,9,10]
// var a=[x,x,x,x,x,x]
// for(var i=0, j=11; i<=6; i++, j--){
//     console.log('a['+i+']['+j+']='+a[i][j]);
// }


/*const subjects=Array('Node js', '', 'React js');
console.log(subjects);
console.log(subjects.length);
subjects[3]='Angular js';
subjects[4]='MongoDB';
console.log(subjects);
console.log(typeof(subjects.length));*/

// every function executes a function for each array element.
var numbers=[6,4,2,8];
var even =numbers.every(function (x) {
    return x%2==0;
});
console.log(even);
console.log(typeof(even));
