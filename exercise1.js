//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

let currentTemp = 70;

function convertToCelsius() {
    return (currentTemp - 32) * (5 / 9).toFixed(2);
}

let celsius = convertToCelsius();

console.log(celsius);


// Part 2: Write another function that converts the Celsius temperature back to Fahrenheit. 

//your code...

function convertToFahrenheit(celsius) {
    return ((celsius * 1.8) + 32).toFixed(2);
}

console.log(convertToFahrenheit(21.11));


/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...

let age = 18;

function canVote() {
    // if(age >= 18) {
    //     console.log('Yes');
    // } else {
    //     console.log('No');
    // }
    return age >= 18 ? 'yes' : 'no';
}

console.log(canVote());





/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...

let str = "The five boxing wizards jump quickly.";


function convertStrToArr() {
    return str.split(' ');
}

console.log(convertStrToArr());


function convertArrToStr() {
    return str.split(' ').join(' ');
}

console.log(convertArrToStr());





/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...





/************************************************************* */
// Problem 5:
// Write a JavaScript function creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...

let phoneNum = 7862742673;

function reverseNum() {
    let str = phoneNum.toString();
    return str.split('').reverse().join('');
}

console.log(reverseNum());




/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...

function evenOrOdd() {
    for(let i=1; i<16; i++) {
        if(i % 2 == 0) {
            console.log(`${i} is an even number`);
        } else {
            console.log(`${i} is an odd number`);
        }
    }
}

// evenOrOdd();




/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...

function fizzBuzz() {
    for(let i=1; i<101; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('TEKcamp');
        } else if(i % 3 == 0) {
            console.log('TEK')
        } else {
            console.log('camp');
        }
    }
}

// fizzBuzz();


/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...

for(let i=0; i<nums.length; i=i+3) {
    console.log(nums[i]);
}


// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

let school = foodArray[foodArray.length - 1];
console.log(school);

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both nameArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

for(let i=0; i<foodArray.length; i++) {
    // console.log(foodArray[i], adjectiveArray[i]);
    if(typeof foodArray[i] === 'string' ) {
        if(foodArray[i].charAt(foodArray.length-1) === 's') {
            console.log(foodArray[i], adjectiveArray[i], 'plural');
        } else {
            console.log(foodArray[i], adjectiveArray[i], 'singular');
        }
    } else if(typeof foodArray[i] === 'object') {
        console.log(foodArray[i], adjectiveArray[i], 'object');
    }
    
    
    // console.log(foodArray[i] == school, 'object')
}
/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = ['+', '-', '*', '/'];
function doMath(x, y) {
    let operation = operations[Math.floor(Math.random() * operations.length)];
    console.log(`The ${operation} ran.`);
    if(operation == '+') {
        console.log(x + y);
    } else if(operation == '-') {
        console.log(x - y);
    } else if(operation == '*') {
        console.log(x * y);
    } else if(operation == '/') {
        console.log(x / y);
    }
};

doMath(10, 2);


