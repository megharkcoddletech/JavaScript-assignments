// 1)

var array = ["1", "2", "3", "4", "5", "6", "7"];
array.splice(5,1);
console.log(array);

// a).Remove number "6" from the array and console the length of the array.

console.log("length of the array is " + array.length);

// b. Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration

array.forEach(
    function(value){
        dataConversion = parseInt(value);
        console.log(`${value}  ${typeof dataConversion}`);
    }
);

// c. Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array.

array.splice(-3,3);
console.log(array);
array.splice(0, 0, "one", "two")
console.log(array)

// d. Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)

var n = array.length;
for(var i=0; i<1; i++){
    concatElements = '';
    var concatElements = array[i] + array[i+1] + array[i+2] + array[i+3] +array[i+4];
    console.log(concatElements);
}

var sum = 0;
array.forEach(
    function (value){
        sum+= parseInt(value);
    }
)
console.log(`sum is ${sum}`);

// e. Filter out item "3" from the array and console the array (use any array method)

let filterArray = array.filter(
    function(value){
        return value == 3; 
    }
)
console.log(`filtered array ${filterArray}`);

// f. Iterate the array and console the item, when item is either "3", "6" or "7"

array.forEach( 
    function(value){
    if (value == "3" || value == "6" || value == "7") {
      console.log(value);
    }
  });

//   g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)

var array1 = ["1", "2", "3", "4", "5", "6", "7"];
var array2 = [1, 2, "3", 4, 5, 6,"7"];
array1.forEach && array2.forEach(
    function(value, index){
        if(typeof array1[index] == typeof array2[index]){
            console.log(value);
        }
    }
)

// h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.

var array3 = [0,2,3,7,5,6,8];
array3.forEach(
    function(value, index){
        multiple = value * index ;
        if (multiple > 40){
            console.log( `${value} ${multiple}`)
        }
    }
)

// i. Create two arrays with five items each and merge the array into a single array and then console it.

var array4 = [1,2,3,4,5];
var array5 = [6,7,8,9,10];
var mergeArray = array4.concat(array5);
console.log(mergeArray);


// 2)​Console this star pattern

let l = 6;
let pyramid = "";
for (let i = 1; i <= l; i++) {
  for (let j = 1; j <= l - i; j++) {
    pyramid += " ";
  }
  for (let k = 0; k <i - 1; k++) {
    pyramid += "* ";
  }
  pyramid += "\n";
}
console.log(pyramid);





