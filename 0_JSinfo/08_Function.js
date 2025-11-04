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

// console.log(d);

let [e, ...f] = [5, 6, 7, 8, 9]
//               e  ____ f ____
// console.log([e, ...f]);
// console.log([...f]);


// Print function
function OKK() {
    return "NOOOO";
}
// console.log(OKK); // NOT calling
// It prints the whole function


// 1. Write a function that checks whether given number is +ve or -ve and print

function check_Num(num) {
    if (num > 0) {
        return "+ve";
    } else if (num < 0) {
        return "-ve";
    } else {
        return "Zero";
    }
}
let numResult = check_Num(22);
// console.log(numResult);

// 2. Write a function that create short code for everyone for eg. short_code("Durga Prasad") Output - "DP"

function ShortForm(fullName) {
    let ar = fullName.split(" ");
    let F = [...ar[0]]
    let L = [...ar[1]]
    // console.log(ar);
    console.log(F[0] + L[0]);
}
// ShortForm("Sharad Aade");

// 3. WAF that accept any number of number of parameters and print the product
function productOfNum(a, b) {
    return a * b;
}
let r = productOfNum(2, 90);
// console.log(r);


// 4. Write a function too find factorial of given number 
//    eg. fact(5), output: 120
let fact = 1;
function Factorial(num) {
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
let ft = Factorial(5);
console.log(ft);

// Convert function to func expression and arrow
/*
    1. 
    function mul(a, b){
        return a * b;
    }

    func expression
    let r = (a, b){
        return a * b;
    }
    
    arrow function
    let r = (a, b) => {
        return a * b;
    }

    2. 
    function area(r){
        return pi * r * r;
    }
    
    let area = function(r){
        return pi * r * r;
    }

    let area = (r) => {
        return pi * r * r;    
    }

    function add(a){
        function add2(b){
            return a + b;
        }
    }
    
    let add = function(a){
        let add2 = function(b){
            return a * b;
        }
        return add2;
    }
        OR
    let add = function(a){
        return function(b){
            return a * b;
        }
        return add2;
    }
    
    let add3 = (a) => (b) => a * b;
*/


