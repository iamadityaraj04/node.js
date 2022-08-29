
/*var x=[0,1,2,3,4,5,6,7,8,9,10]
var a=[x,x,x,x,x,x]
for(var i=0, j=11; i<=6; i++, j--){
    console.log('a['+i+']['+j+']='+a[i][j]);
}*/


/*const subjects=Array('Node js', '', 'React js');
console.log(subjects);
console.log(subjects.length);
subjects[3]='Angular js';
subjects[8]='MongoDB';
console.log(subjects);
console.log(subjects.length);
console.log(typeof(subjects.length));*/

// every function executes a function for each array element.
/*var numbers=[6,4,2,8];
var even =numbers.every(function (x) {
    return x%2==0;
});
console.log(even);
console.log(typeof(even));*/

/*var a=[6,4,2,8];
console.log(a.join(''));*/

//Array literal
const courses = ['JavaScript', 'Node js', 'React js'];
console.log(courses);
console.log(courses[2]);
//Array function
const subjects = Array('JavaScript', 'Node js', 'React js');
console.log(subjects);
console.log(subjects.length);
subjects[3] = 'Angular js';
console.log(subjects);
//Array methods:->
// concat   syntax-> var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
var num1 = [11, 12, 13]
var num2 = [14, 15, 16]
var num3 = [17, 18, 19];
console.log(num1.concat(num2, num3));
// every   syntax-> arr.every(callback(element[, index[, array]])[, thisArg])
var numbers = [6, 4, 8, 2];
var even = numbers.every(function(x){
  return x%2 == 0;
});
console.log(even);
// filter   syntax-> var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
var numbers = [6, 4, 8, 3];
var even = numbers.filter(function(x)
{
  return x%2 == 0;
});
console.log(even);
// forEach   syntax-> array.forEach( callback, thisObject )
var array_1 = [2, 3, 4, 5, 6];
array_1.forEach(function(num, i) {
    array_1[i] *= 2
});
console.log(array_1);
// indexOf   syntax-> array.indexOf(element, start)
var items = [ 'David', 'John', 'Michael', 'Reeta' ];
a = items.indexOf('John')
console.log(a);
//join   syntax-> array.join(separator)
var a = [ 1, 2, 3, 4, 5, 6 ];
console.log(a.join(''));
//pop   syntax-> arr.pop()
var items = [ 'David', 'John', 'Michael', 'Reeta' ];
console.log(items.pop());
console.log(items);    
//push   syntax-> arr.push(element1, elements2 ....., elementN]])
var items = [ 'David', 'John', 'Michael', 'Reeta' ];
console.log(items.push('Ibrahim'));
console.log(items);
//reverse   syntax-> arr.reverse()
var items = [ 'David', 'John', 'Michael', 'Reeta' ];
console.log(items.reverse());  
//shift   syntax-> arr.shift()
var items = [ 'David', 'John', 'Michael', 'Reeta' ];
console.log(items.shift());
console.log(items);
//slice   syantx-> arr.slice(begin, end)
var items = [ 'David', 'John', 'Michael', 'Reeta' , 'Anuj'];
console.log(items.slice(1,3));  
console.log(items);
//some   syntax-> arr.some(callback(element))
var numbers = [6, 4, 8, 2];
var even = numbers.some(function(x){
  return x%2 == 0;
});
console.log(even);
//sort   syantx-> arr.sort()
var items = [ 'David', 'John', 'Michael', 'Reeta' , 'Anuj'];
console.log(items.sort());
//sort   syantx-> arr.sort()
var items = [ 100, -20, -30, 9.3 , 50];
console.log(items.sort())
//sort   syantx-> arr.sort(compareFunction)
var arr = [ 100, -20, -30, 9.3 , 50];
console.log(arr.sort(function(a, b) {
return a-b;
}));
//splice   syntax-> Array.splice( index, remove_count, item_list )
var items = [ 'David', 'John', 'Michael', 'Reeta' , 'Anuj'];
console.log(items.splice(1, 0, 'Rani', 'Rahul', 'Sahil'))
console.log(items);
/*-----------------------------------------------------------*/
// ES6 array methods
// find
var numbers = [6, 4, 8, 3];
var even = numbers.find(function(x){
  return x%2 == 0;
});
console.log(even);
// entries
var numbers = [5, 4, 3];
var val = numbers.entries();
console.log(val.next().value);  
console.log(val.next().value);  
console.log(val.next().value);
// from
console.log(Array.from("hello"));
// keys
console.log(Array.from([45, 78].keys()))