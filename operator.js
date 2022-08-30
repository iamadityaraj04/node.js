const [course1, ...restOfCourses]=['node.js','react.js','mongoDB','HTML'];
console.log(course1);
console.log(restOfCourses);

const marks1=[32,43,46];
const marks2=[23,67,97];
const marksCombined=[...marks1,...marks2];
console.log(marksCombined);