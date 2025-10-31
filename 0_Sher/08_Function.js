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
function check_age(age){
    return a > 18 ? true : confirm('Did parents allow you?');
}


// Write a function min(a,b) which returns the least of two numbers a and b
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function checkMin(a, b){
    return Math.min(a, b);
}
// let result = checkMin(5, -2);
// console.log(result);

// function Power(a , b){
//     return Math.pow(a, b);
// }
// let r = Power(2, 4);
// console.log(r);


function fun(...numbers){
    // console.log(typeof numbers);
    // console.log(numbers);
    return numbers;
}
let x = fun(1, 2, 3, 4);
console.log(...x);



// Spread operator
// let a = [1, 2, 3, 4, 5];
// console.log(...a);


