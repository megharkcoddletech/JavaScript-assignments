// Qn No : 1
// Create variables with different data types available in JS and print their data types along with each variable name in the console. 

let num1 = 5;
let student = "rakhi";
let mark = 60;
let main;
let num2 = 2938383839983n;
let nullValue = null;
let arr = [ "apple", "orange", "banana"]
console.log("num1:", typeof num1);
console.log("student:", typeof student);
console.log("main:", typeof main);
console.log("mark:", typeof mark==6);
console.log("num2:" , typeof num2);
console.log("null_value:", typeof nullValue)
console.log("arr:", typeof arr)

// Qn No : 2
// Create a concatenated string with the above variables using template literals and without template literals. (separate each variable by space in the string)

let tempLiter = `${student} got ${mark} percentage in ${num1} .`;
console.log(tempLiter);
let nonTemp = student + " " + "got" + " " + mark + " " + "percentage in" + " " + num1 + ".";
console.log(nonTemp);

// Qn No: 3
// Write a JS program to show an alert message on the loading of the website.

alert("Website is loading");