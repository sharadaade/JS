// Que 1 : Write a 'JavaScript' program to check and print that the given number is even or odd without using ternary operator and control statements and print the output on the console.
// --------

//     Sample input: let a = 10
// Sample Output: EVEN

// Sample input: let a = 125
// Sample Output: ODD

// Note: Don't use any control statement only use logical operators and Take the input from the user using prompt() function.

// ========================================================================================================

// Que 2 : Write a 'JavaScript' program to check and print the Maximum number among two numbers without using ternary operator, control statements and predefined methods.
// --------

// Sample input : let a = 10 , b = 20
// Sample Output : MAX = 20

// Note : Don't use any control statement or predefined methods only use operators and Take the input from the user using prompt() function..

// ========================================================================================================

// Que 3 : Write a 'JavaScript' program to check and print the Maximum number among three numbers without using ternary operator, control statements and predefined methods.
// --------

// Sample input : let a = 10 , b = 200, c = 134;
// Sample Output : MAX = 200

// Note : only use operators to solve the question and Take the input from the user using prompt() function..

// ========================================================================================================

// Que 4 :  Write a 'JavaScript' program to check and print the Maximum number among three numbers using ternary operator.
// --------

// Sample input : let a = 10 , b = 200, c = 134;
// Sample Output : MAX = 200

// Note : Take the input from the user using prompt() function.
// ========================================================================================================

// Que 5 :  Write a 'JavaScript' program to check and print that given number is even or odd using ternary operator.
// --------

// Sample input : let a = 10
// Sample Output : EVEN

// Sample input : let a = 125
// Sample Output : ODD

// Note : Take the input from the user using prompt() function.

// ========================================================================================================
// Que 6 : Write a JavaScript program that takes an integer as input and checks if it is a positive, negative, or zero.
// ------- Display the appropriate message as output using the ternary operator.


//     Sample Input:
//               enter a number: -1


//     Sample Output:
//         you entered negative number


//     Sample Input:
//                  enter a number: 1

//     Sample Output:
//         you entered positive number

//     Sample Input:
//                   enter a number: 0

//     Sample Output:
//         you entered zero

// Note : Take the input from the user using prompt() function.
// Post by Durga Prasad
// Durga Prasad
// Created 12:53 PM12:53 PM
// while loop: while loops is an entry control loop which contains initialization, condition and updation at three different points
// initialization;
// while(condition){
//     //body
//     updation;
// }
// eg:  //print numbers 1 to 10 in console
//      let i = 1 ; //initialization
//      while(i<=10){   //condition
//         console.log(i);
//         i++;  //updation
//      }

// 1. write a js code to print the given name in reverse
// input : prasad
// output: dasarp
// let n = prompt("enter any name");//prasad
// let revStr =""
// let i = n.length-1;
// while (i >=0)
// {
//     revStr = revStr+ n.charAt(i);
//     i--;
// }
// console.log(revStr)

// // write a js code to input a sentence and get indiviual words reverse
// input: JS is so Easy
// output: SJ si os ysaE

// do-while:  do while is used to iterate certain statements until the condition is false but it is an exit control loop so it checks the condition at the exit point. so, even if the condition is false, it works for one time
// initialization;
// do{
//   //statements;
//   updation;
// }while(condition);

// eg: print number 1 to 10 using do while
//   let n = 1;
//   do{
//     console.log(n);
//     n++;
//   }while(n<=10);

//   Questions :
//   1. write JS code to check whether given number is pallindrome or not (eg: 121 is pallindrome , 152 is not pallindrome because its reverse is 251)

//   2. write a JS code to Print Digit Sum  of Given number until its single Digit
//   (Eg: 1975  ==> 1+9+7+5 = 22 ==>2+2 = 4)

//   3. Write a JS code to check and print number of vowels and spaces in given sentense (Eg: input : "JS is so easy", output : spaces :3, vowels:4 )/*1. write a js code to print the given name in reverse
// input : prasad
// output: dasarp*/

// // let n = prompt("enter any name");//prasad
// // let revStr =''
// // let i = n.length-1;
// // while (i >=0)
// // {
// //     revStr = revStr+ n.charAt(i);
// //     i--;
// // }
// // console.log(revStr)

// //// write a js code to input a sentence and get indiviual words reverse
// //input: JS is so Easy
// //output: SJ si os ysaE

// let words = prompt("enter sentense").split(" ");
// console.log(words)
// let i = 0;
// let answer = ''
// while (i < words.length)
// {
//     let n = words[i]
//     let revStr =''
//     let j = n.length-1;
//     while (j >=0)
//     {
//         revStr = revStr+ n.charAt(j);
//         j--;
//     }
//     answer =  answer+revStr+" "
//     i++
// }
// console.log(answer)
// Post by Ravindra
// Ravindra
// Created YesterdayYesterday
// Que 1 :  Write a 'JavaScript' program to print student details using console.log() function only.
// -------

// Sample Output : Name = Rohit Sharma
//                 Roll No = 1001
//                 Branch = B. Tech
//                 Address = Hyderabad
//                 Collage Name = Naresh It

// ========================================================================================================
// Que 2 :  Write a 'JavaScript' program to declare and initialize two variable like let a=10,b=20 and print the Addition, subtraction, multiplication, division, Modulation operation and print the output on console.
// -------

// Sample input : a=20, b=10;

// Sample Output :
//                Addition is : 30
//                subtraction is : 10
//                Multiplication is : 200
//                Division is : 2
//                Modulation is : 0

// ========================================================================================================

// Que 3 :  Write a 'JavaScript' program to print Addition of any two positive numbers without using (+) operator and print the output on console.
// -------

// Sample input : let a = 10, b=20;

// Sample Output : Addition is 30

// ========================================================================================================

// Que 4 :  Write a 'JavaScript' program to print sum of first and last digit of given any 2 digit number and print the output on the console.
// -------

// Sample input : let number = 23;

// Sample Output : 5

// Explanation : given number is = 23 . so the result is (2+3)=5


// ========================================================================================================

// Que 5 :  Write a 'JavaScript' program to print sum of first and last digit of given any 3 digit number and print the output on the console.
// -------
// ( Without using any control statement )

// Sample input : let number = 123;

// Sample Output : 4

// Explanation : given number is = 123 . so the result is (1+3)=4



// ========================================================================================================

// Que 6 : Write a JavaScript program to calculate and print the area of a square and rectangle and print the output on the console.
// -------

// Sample input :
// Side of square is : 5
// Length and breadth of rectangle is : 4 , 5

// Sample output :
// The area of the square with side 5 is: 25
// The area of the rectangle with length 4 and breadth 5 is: 20

// ========================================================================================================

// Que 7 :  Write a 'JavaScript' program to swap any two integer number using third variable and print the output on the console.
// -------

// Sample input : let a = 10 , b = 20 ;

// Sample Output : Before Swapping : a = 10 , b = 20
//                 After Swapping  : a = 20 , b = 10

// ========================================================================================================

// Que 8 :  Write a 'JavaScript' program to swap any two integer number without using third variable and print the output on the console.
// -------

// Sample input : let a = 10 , b = 20 ;

// Sample Output : Before Swapping : a = 10 , b = 20
//                 After Swapping  : a = 20 , b = 10

// ========================================================================================================

// Que 9 :  Write a 'JavaScript' program to find previous multiple of 10 of given 2 digit value only.
// -------

// Sample input : let a = 26;

// Sample Output : 20



// ========================================================================================================

// Que 10 :  Write a 'JavaScript' program to find next multiple of 10 of given 2 digit value only.
// --------

// Sample input : let a = 34;

// Sample Output : 40

