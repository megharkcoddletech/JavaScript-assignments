/* eslint-disable no-unused-vars */
// 1) ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.

let ar = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ];
ar.map( value => { 
    let arrayValue;
        switch(value){
            case 'car':
                arrayValue = 'car';
                break;
            case 1:
                arrayValue = 1;
                break;
            case 5:
                arrayValue = 5;
                break;
            case 'js':
                arrayValue = 'js';
                break;
            case 'node js':
                arrayValue = 'node js';
                break;
            case 'mysql':
                arrayValue = 'mysql';
                break;
            case 'sql':
                arrayValue = 'sql';
                break;
            default:
                arrayValue = "not exist"; 
        }
        console.log(arrayValue);
    }
    );


//  2) [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.

let arrayDelete = [1, 2, 3, 4, 5, 6];
var index1 = 2;
var index2 = 5;
function delAarry(array){
    for(let index=array.length - 1; index >=array.length -1; index--){
        let arrr = array.splice(index2, 1) && array.splice(index1, 1);
        break;
    }
    console.log(array);
}
delAarry(arrayDelete);

// 3) Use constructor method to console all elements of the passed array. (the array will be passed to the
// constructor method)

function constFunction(array){
    this.array = array;
    return function(){
        for(let i=0; i<array.length; i++){
            console.log(this.array[i]);
        }
    }
}

let arrayConstructor = [1, 2, 3];
let objConstructor = new constFunction(arrayConstructor);


// 4) Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one
// of the item name either in the passed array or not in the passed array, the function should delete the 
// passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array, 
// finnally console the output.

function arFunction(array, values){
    return function(){ 
    for(let j=array.length - 1; j>=0; j--){
        if (array[j] == values){ 
            array.splice(j, 1);
        }
        else{
            array.push(values);
            break;
        }
    }
    console.log(array);
};
}
let arr = [1,2,3,4,5];
let value = 6;
arFunction(arr,value);



//5) Create a self-invoking function to console you name

(function myName(){
    console.log("megha")
})();

//6) {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])

let obj={a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }
let arrayObject = Object.keys(obj);
let reverse = arrayObject.reverse();
console.log(reverse);


// 7)From the given object remove the data array item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )

var objId = {data:[{a: 'one', id: '22'},{a: 'four', id: '7'},{a: 'six', b: '2'},{a: 'sixty', id: '24'},{a: 'five', id: '212'}]}
for(var i = objId.data.length - 1;i >= 0; i--){
    if(objId.data[i].id == 24){
        objId.data.splice(i, 1);
    }
}
console.log(objId.data);


// 8) Given var string = "Javascript is the King of the web."
// a) Get the length of the string. 
  
var string = "Javascript is the King of the web.";
console.log("length of the string is: " + string.length);


// b) Print the 8th character of the string without using any function. 


console.log(string[7]);


// d) Get the position of the word "King" in string. 

var newString = string.split(" ");
let p = newString.indexOf("King");
console.log("position of King is " +p);


// e) Replace "King" with "Emperor". 

let rString = string.replace("King", "Emperor");
console.log(rString);


// f) Insert the string "new” before the word "King". 

let splitWord = string.split(" ", 3);
let add = splitWord + ",new,";
let splitWordLast = string.slice(-16);
let s= splitWordLast.split(" ")
let newsentence = add + s;
console.log(newsentence);


// g) Get the words in string as an array.

console.log(newString);


// h) Extract and print the words "is the King" from string. 
 
let extract = string.substring(11 , string.indexOf("o"))
console.log(extract);


// i) Get the count of occurrences of the strings "the" and "of" in string. 
let splitString = string.split()
let countThe = 0;
let countOf = 0;
for(let i= string.length-1; i>=0;i--){
    if (i == string.indexOf("the")){
        countThe++;
    } else if(i == string.indexOf('of')) { 
        countOf++;
    }
}
console.log("Occurence of the: " +countThe);
console.log("Occurence of of: " +countOf);



// j) pad string with "*" and set the total length of the string as 30, displayed at right side.

string =["Javascript is the King of the web."];
let padded = string.padEnd(30,"*");
console.log(padded); 


