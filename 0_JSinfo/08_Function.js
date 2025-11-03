// Write a JS code to input a sentence and get individual words reverse
// input - JS is so Easy
// output - SJ si os ysaE

let words = 'JS is so Easy';
let splString = words.split(" "); // split is a pre-built function
// console.log(splString);


// Task
// Function to ternary operator
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

// Ans - 
function check_age(age) {
    return a > 18 ? true : confirm('Did parents allow you?');
}


// Write a function min(a,b) which returns the least of two numbers a and b
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function checkMin(a, b) {
    return Math.min(a, b);
}
// let result = checkMin(5, -2);
// console.log(result);

// function Power(a , b){
//     return Math.pow(a, b);
// }
// let r = Power(2, 4);
// console.log(r);


function fun(...numbers) {
    // console.log(typeof numbers);
    // console.log(numbers);
    return numbers;
}
let x = fun(1, 2, 3, 4);
// console.log(...x);



// Spread operator
// let a = [1, 2, 3, 4, 5];
// console.log(...a);


function helloWorld() {
    console.log("Hello JavaScript");
}

// helloWorld();

const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// function minNumber(a, b, ...z) {
//     console.log(Math.min(a, b, ...z))
// }

// minNumber(4,57, 7, 2)

function minNumber(a, b, ...z) {
    return Math.min(a, b);
}

let result = minNumber;
// console.log(result);


// Spread Operator
a = [1, 2]
b = [3, 4]

c = [a, b]
d = [...a, ...b]

console.log(d);

let [e, ...f] = [5, 6, 7, 8, 9]
//               e  ____ f ____
console.log([e, ...f]);
console.log([...f]);


// 1. Write a function that checks whether given number is +ve or -ve and print
// 2. Write a function that create short code for everyone for eg. short_code("Durga Prasad") Output - "DP"
// 3. WAF that accept any number of number of parameters and print the product
// 4. Write a function too find factorial of given number 
//    eg. fact(5), output: 120
