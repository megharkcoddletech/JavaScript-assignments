// 1)
//dont use keyword names like array for naming variables

let numbers = ['1', '2', '3', '4', '5', '6', '7'];
numbers.splice(5, 1);
console.log(numbers);

// a).Remove number "6" from the array and console the length of the array.

console.log('length of the array is ' + numbers.length);

// b. Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration

// why the variable is not declared?

numbers.forEach(function (value) {
    let dataConversion = parseInt(value);
    console.log(`${value}  ${typeof dataConversion}`);
});

// c. Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array.

// can we use arrray.push here?

numbers.splice(-3, 3);
console.log(numbers);
numbers.unshift('one', 'two'); 
console.log(numbers);

// d. Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)

// what is this? the o/p is not correct, havent u checked?
let sumArray = ["1", "2", "3", "4", "5", "6", "7"] ;
console.log(`sumarray: ${sumArray}`);
let concatElements = "";
let sum = 0;
for ( let i=0; i<sumArray.length; i++){
    concatElements += sumArray[i];
    sum += parseInt(sumArray[i]);
}
console.log("concatenated elements :" + concatElements);
console.log(`sum ${sum}`);

// e. Filter out item "3" from the array and console the array (use any array method)

let filterArray = numbers.filter(function (value) {
    return value == 3;
});
console.log(`filtered array ${filterArray}`);

// f. Iterate the array and console the item, when item is either "3", "6" or "7"

numbers.forEach(function (value) {
    if (value == '3' || value == '6' || value == '7') {
        console.log(value);
    }
});

//   g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)

//why did u redeclare the same array with different name array1? u already have that on top. and dont use var
//[1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given here which u have compared?
//(Compare each item of this array with each item of the other array)

// I have to redeclared the same array, since the array's value is changed.
let array1= ['1', '2', '3', '4', '5', '6', '7'];
let array2 = [1, 2, '3', 4, 5, 6, '7'];
array1.forEach &&
    array2.forEach(function (value, index) {
        if (typeof array1[index] == typeof array2[index]) {
        let equalDataType = array1[index];
        console.log(`element with same datatype: ${equalDataType}`);
        }
    });


// h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.

// variable is not declared

var array3 = [0, 2, 3, 7, 5, 6, 8];
array3.forEach(function (value, index) {
    let multiple = value * index;
    if (multiple > 40) {
        console.log(`value: ${value} , multiple: ${multiple}`);
    }
});

// i. Create two arrays with five items each and merge the array into a single array and then console it.

var array4 = [1, 2, 3, 4, 5];
var array5 = [6, 7, 8, 9, 10];
var mergeArray = array4.concat(array5);
console.log(`merged array : ${mergeArray}`);

// 2)
// console this star pattern
let l = 6;
let pyramid = '';
for (let i = 1; i <= l; i++) {
    for (let j = 1; j <= l - i; j++) {
        pyramid += ' ';
    }
    for (let k = 0; k < i - 1; k++) {
        pyramid += '* ';
    }
    pyramid += '\n';
}
console.log(pyramid);
