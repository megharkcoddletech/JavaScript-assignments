// 1) ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.

let ar = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ];
ar.map( value => { 
    let arrayValue;
        switch(value){
            case value:
                arrayValue = value;
                break;
            default:
                arrayValue = "not exist"; 
        }
        console.log(arrayValue);
    }
    );


//  2) [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
 

function outerFunction() {
    let arrayDelete = [1,2,3,4,5,6]; 
    let index1 = 2;
    let index2 = 5;
    for(let index=arrayDelete.length - 1; index >=arrayDelete.length -1; index--){
        arrayDelete.splice(index2, 1) 
        arrayDelete.splice(index1, 1);
        break
        }
    function innerFunction() {
        console.log(arrayDelete); 

    }
    innerFunction();
}
outerFunction();


// 3) Use constructor method to console all elements of the passed array. (the array will be passed to the
// constructor method)

class ArrayDelete{ 
    constructor(array){
        this.array = array;
    }
    getElements(){ 
        for (let i=0; i<this.array.length; i++){
            console.log(this.array[i])
        }
    }

}
let obj1 = new ArrayDelete([1, 2, 3, 4, 5,"six","seven"]);
console.log(obj1.getElements());


// 4) Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one
// of the item name either in the passed array or not in the passed array, the function should delete the 
// passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array, 
// finnally console the output.

function arFunction(array, values){
    let flag =1;
    for(let j=array.length - 1; j>=0; j--){
        if(array[j] == values ){
            flag =0;
        }
    } 
    let l = array.indexOf(values)
        if (flag == 1){
           array.push(values);
        }
        else{
            array.splice(l, 1);
        }
    console.log(array);
}
let arr = [1,2,3,4,5];
let value = 8;
arFunction(arr,value);


//5) Create a self-invoking function to console you name

(function myName(){
    console.log("megha");
})();

//6) {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])

let obj={a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' };
let arrayObject = Object.keys(obj);
let reverse = arrayObject.reverse();
console.log(reverse);


// 7)From the given object remove the data array item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )

let objId = {data:[{a: 'one', id: '22'},{a: 'four', id: '7'},{a: 'six', b: '2'},{a: 'sixty', id: '24'},{a: 'five', id: '212'}]}
for(let i = objId.data.length - 1;i >= 0; i--){
    if(objId.data[i].id == 24){
        objId.data.splice(i, 1);
    }
}
console.log(objId.data);


// 8) Given let string = "Javascript is the King of the web."
// a) Get the length of the string. 
  
let string = "Javascript is the King of the web.";
console.log("length of the string is: " + string.length);


// b) Print the 8th character of the string without using any function. 


console.log("8th charecter: " + string[7]);


// d) Get the position of the word "King" in string. 

let newString = string.split(" ");
let p = newString.indexOf("King");
console.log("position of King is " +p);

// e) Replace "King" with "Emperor". 

let rString = string.replace("King", "Emperor");
console.log ("after replacement: " + rString);


// f) Insert the string "new” before the word "King". 

let positionOfK = string.indexOf("K");
console.log(string);
let newSubString = string.substring(positionOfK);
let newSubString2 = " new " + newSubString;
let addWord = string.replace("King of the web" , newSubString2);
console.log("'new' added: " + addWord);


// g) Get the words in string as an array.

console.log("string to array: " + newString);


// h) Extract and print the words "is the King" from string. 
 
let extract = string.substring(11 , string.indexOf("o"))
console.log(extract);


// i) Get the count of occurrences of the strings "the" and "of" in string. 
 
let countThe = 0;
let countOf = 0;
function countWord(string){ 
for(let i= string.length-1; i>=0;i--){
    if (string[i] === "the"){ 
        countThe += 1;
    } 
    else if(string [i] === 'of') { 
        countOf += 1;
    }
}
console.log("Occurence of the: " +countThe);
console.log("Occurence of of: " +countOf);
}
countWord(newString);


// j) pad string with "*" and set the total length of the string as 30, displayed at right side.

let string1 ="Javascript is the King of the web.";
let str1 = string1.slice(5); 
let padded = str1.padEnd(30,"*");
console.log(padded); 
console.log("total length of the string after padEnd: " + padded.length);