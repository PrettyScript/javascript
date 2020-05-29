//Complete the following problems: 

console.log("*************************************************************");
console.log("PROBLEM 1:");
console.log("*************************************************************");
/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...
function string(str) {
    if(str == '') {
        return true;
    } else {
        return false;
    }
};

console.log(string('Hello'));



console.log("*************************************************************");
console.log("PROBLEM 2:");
console.log("*************************************************************");
/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 



//your code...
let word = 'Learning JavaScript is fun!';
let newWord = word.replace('fun', 'cool');
console.log(newWord);


console.log("*************************************************************");
console.log("PROBLEM 3:");
console.log("*************************************************************");
/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 



//your code...

const array = () => {
    let arr = [1, 2, 3, 4, 5];
    let newArr = [];

    for(let i =0; i<arr.length; i++) {
        let square = arr[i] * arr[i]
        newArr.push(square);
    }

    return newArr;
};

console.log(array());




console.log("*************************************************************");
console.log("PROBLEM 4:");
console.log("*************************************************************");
/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.



//your code...
const greaterThan3 = () => {
    let arr = [1, 3, 5, 7, 9, 1, 3, 5];
    let newArr = [];

    for(let i=0; i< arr.length; i++) {
        if(arr[i] > 3) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(greaterThan3());




console.log("*************************************************************");
console.log("PROBLEM 5:");
console.log("*************************************************************");
/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...
const numArr = () => {
    let arr = [10, 16, 25, 28, 19];
    let sum = 0;

    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};

console.log(numArr());




console.log("*************************************************************");
console.log("PROBLEM 6:");
console.log("*************************************************************");
/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  

//your code...
const pairs = (dna) => {
    let dnaMapping = {
        'G':'C',
        'T':'A',
        'C':'G',
        'A':'T'
    };

    let complementaryStrand = [];
    let dnaArr = dna.split('');

    for(let i=0; i<dnaArr.length; i++) {
        complementaryStrand.push(dnaMapping[dnaArr[i]]);
    }
    console.log(complementaryStrand);
    
};

pairs("GCTA");




console.log("*************************************************************");
console.log("PROBLEM 7:");
console.log("*************************************************************");
/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
    let newArr=[];
    let max = 0;

    let number = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10
    };

    let strNumber = {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10
    };
    
    for(let i=0; i<numbers.length; i++) {
        if(typeof numbers[i] == 'number') {
            newArr.push(numbers[i]);
        } else if(typeof numbers[i] == 'string') {
            newArr.push(number[numbers[i]]);
            newArr.push(strNumber[numbers[i]]);
        } 
    }

    newArr = newArr.filter(function( element ) {
        return element !== undefined;
     });

    for(let i=0; i<newArr.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max;
}
console.log(`Max number is: ${maxNumber(numbers)}`);

// // // 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    //your code...
    return numbers.sort();
};

console.log(sortNums(numbers,desc=false));




console.log("*************************************************************");
console.log("PROBLEM 8:");
console.log("*************************************************************");
/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
// mapObj.set({company : "TEKsystems"},"object");

mapObj.set('Word', 'String');
mapObj.set('True', 'Boolean');
mapObj.set('[]', 'Array');
mapObj.set('False', 'Boolean');
mapObj.set('345', 'Number');

console.log(mapObj.has({company : "TEKsystems"}));  

console.log(`The code above doesn't work because in order to set/update the object you have to use a key (a string/ a number) and a value.\nIn the above code, the key is an object(which is invalid) so, when using the ".has" method it returns false.`)
// //The above console.log() statement returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 196, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

// //your code...
mapObj.set('company', 'TEKsystems');
console.log(mapObj.has('company', 'TEKsystems'));

// //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
let mapArr = [];

for(let i of mapObj) {
    mapArr.push(i[1]);
}
mapArr.pop();

console.log(mapArr);

console.log("*************************************************************");
console.log("PROBLEM 11:");
console.log("*************************************************************");
/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
// reverse the array, without modifying the ones array.
console.log(ones.reverse());

console.log("*************************************************************");
console.log("PROBLEM 12:");
console.log("*************************************************************");
/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function performer(cb) {
    console.log('I love learning!')
    cb();
}

function eating() {
    console.log('I love to eat Chick-fil-a!')
}

performer(eating);

console.log("*************************************************************");
console.log("BONUS:");
console.log("*************************************************************");
/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
function sum (x, y = 7, z = 42) {
    return x + y + z
}
console.log(sum(1) === 50);
// this feature is Default Parameters, it allows for default parameters to be used in the event the parameters are not provided
// it is useful because it can make your code easy to read and you won't have as many errors as you continue to create more code/functions