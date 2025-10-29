// Que 1 :  
// Write a 'JavaScript' program to print student details using console.log() function only.

// console.log("Sharad");
// console.log('Maharashtra');
// console.log(`+91 721800****`);

// Que 2 :  
// Write a 'JavaScript' program to declare and initialize two variable like let a=10,b=20 and print the Addition, subtraction, multiplication, division, Modulation operation and print the output on console.

// let a = 22;
// let b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);


// Que 3 :  Write a 'JavaScript' program to print Addition of any two positive numbers without using (+) operator and print the output on console.

// let a = 20;
// let b = 22;

// console.log(a - (-b));


// Que 4 :  Write a 'JavaScript' program to print sum of first and last digit of given any 2 digit number and print the output on the console.

// Sample input : let number = 23;

// let num = 23;
// let lastDigit = num % 10;
// let firstDigit = Math.floor( num / 10);

// console.log("First Digit " + lastDigit);
// console.log("Last Digit " + firstDigit);
// console.log("Addition of first and last digit = " + (firstDigit + lastDigit));



// Que 5 :  Write a 'JavaScript' program to print sum of first and last digit of given any 3 digit number and print the output on the console.
// ( Without using any control statement )
// Sample input : let number = 123;
// Sample Output : 4

// let n = 523;
// let last = n % 10;
// let first = Math.floor(n/100)

// console.log('Last ' + last);
// console.log('First ' + first);

// console.log('Addition of first and last digit : ' + (first + last));


// console.log("6" + "2");

// Que 6 : Write a JavaScript program to calculate and print the area of a square and rectangle and print the output on the console.


// let SquareSide = 2.2;
// let RectLength = 1.1;
// let RectWidth = 5.3;

// let AreaOfSquare = SquareSide * SquareSide;
// let AreaOfRectangle = RectLength * RectWidth;

// console.log(`Area of square ${AreaOfSquare}`);
// console.log(`Area of rectangle ${AreaOfRectangle}`);


// Que 7 :  Write a 'JavaScript' program to swap any two integer number using third variable and print the output on the console.

// let a = + prompt(`Enter the number in a`);
// let b = + prompt(`Enter the number in b`);

// let temp = a;
// a = b;
// b = temp;

// alert(`a = ${a} and b = ${b}`);

// Que 8 :  Write a 'JavaScript' program to swap any two integer number without using third variable and print the output on the console.

// let a = + prompt(`Enter the number in a`); // 10
// let b = + prompt(`Enter the number in b`); // 20

// a = a + b; // 30

// b = a - b; // 30 - 20 = 10
// a = a - b; // 30 - 10 = 20

// alert(`a = ${a} and b = ${b}`);


// Que 9 :  Write a 'JavaScript' program to find previous multiple of 10 of given 2 digit value only.

// let num = + prompt(`Enter the number two digit number`);
// num = Math.floor( num / 10);
// num *= 10;
// alert(num);


// Que 10 :  Write a 'JavaScript' program to find next multiple of 10 of given 2 digit value only.
// Sample input : let a = 34;
// Sample Output : 40

// let num = + prompt("Enter the number");
// num = num % 10;
// alert(num * 10);











// Addition of first and last digit number
// ---------------------------------------------------------
// let num = 567;//3
// let temp = num;
// let count = 0;
// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);
// }
// num = temp;
// let sum = 0;
// let i = 1;
// while (num > 0) {
//     if (i == 1 || i == count) {
//         sum = sum + num % 10;
//     }
//     i++;
//     num = Math.floor(num / 10);
// }
// console.log(sum);


