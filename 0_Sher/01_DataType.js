// Datatypes
// 1. Value type => stored directly OR Direct copy contains
// string , number, boolean, null, undefined, symbol, bigint

// 2. Reference type => stored as memory reference
// Array, object, functions
//  []      {}      ()


// ##########################################
// 1. Value type 
let a = 20;    // a = 20
let b = a;     // b = 20 (copy of a's value)
a = a + 5;     // a = 25, b = 20 (unchanged!)

// ----------------------------------------------------
// i. string => 
// single quote => ' '
// double quote => " "
// backticks quote => ``

// -----------------------------------------------------------
// ii. Number
// let n  = 23 => integer or number 
// let m = 3.2225 => float or number 

// -----------------------------------------------------------
// iii. boolean 
// let result1 = true;
// let result2 = false;


// ----------------------------------------------------------
// iv. null => intentionally we are not giving the value
// let topperStudent = null;


// ----------------------------------------------------------
// v. undefined 
// We declared variable but not assigned value to that variable 
// let marks; => typeof marks is undefined

// ---------------------------------------------------------
// vi. symbol; 
// It is an immutable value
// let s1 = Symbol("uid");
// let s2 = Symbol("uid");
// Both are the unique

// let obj = {
//     uid: 1,
//     name: "Sharad",
//     age: 25,
//     email: "aade@gmail.com",
// };

// let uid = Symbol("uid");
// obj[uid] = "001";


//-------------------------------------------------------
// vii. Bigint => It store the large integer value
// NOTE: - add 'n' at the end of number 
let num = 12365751761525371537653713571357n;
// console.log(num);


// ##########################################################
// 2. Reference type => 
// it store the reference & we can't copy of original values
//reference of c means when we change the value d it affects the c 
// let c = [1,2,3,4] 
// let d = c; 
// d.pop();


// let obj1 = { value: 20 };
// let obj2 = obj1;
// obj1.value = 25;
// console.log(obj2.value); // 25 (changed!

// let x = []
// let y = {}
// let z = x + y;

// ########################################################
// Dynamic typing =>
// In JS there is no static typing, it supports dynamic typing
// Means we can change the data type because of dynamic typing

// Ex.
// let xyz = 22;
// xyz = true;
// xyz = 1.234;
// xyz = 'Sharad';
// xyz = [];
// xyz = null;
// xyz = undefined;


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// typeof  Myths 
// IMP => 
// typeof NaN => number
// typeof null => object
// NaN == NaN => false


// Type coercion (== vs ===)
// == -> Checks the value only (not check data type) 
// ===  -> It checks ths type of vales of both side


//  Plus(+) does two things type conversion and concatenation
// The + (Plus) Operator
// The + operator does two things:
// Addition → when both operands are numbers
// String concatenation → when any one operand is a string

// 5 + 2      // =>  7        → both numbers → addition
// "5" + 2    // => "52"     → one string → concatenation
// 2 + "5"    // => "25"     → one string → concatenation
// "5" + "2"  // => "52"     → both strings → concatenation

// NOTE:- If any operand is a string, + converts the other to a string and joins them.

// Minus(-) does only one things thats why it minus it
// The -, *, /, %, ** Operators
// These are numeric-only operators.
// They automatically convert strings to numbers before performing the operation.
// "5" - 2     // 3
// "10" * "2"  // 20
// "10" / "2"  // 5
// "9" % "2"   // 1
// "2" ** "3"  // 8

// NOTE:- If the value is a string that looks like a number, JavaScript converts it automatically.


// BONUS:
// Invalid Numeric Conversion → NaN
// "hello" - 1   // NaN
// "5a" * 2      // NaN

// Boolean Type Conversion
// true + 1     // 2    (true → 1)
// false + 1    // 1    (false → 0)
// "5" - true   // 4    ("5" → 5, true → 1)

// Null and Undefined
// null + 1       // 1   (null → 0)
// undefined + 1  // NaN (undefined → NaN)


//############################################################
// Truthy vs Falsy values

// Falsy values:-
// 0, false, "", '', ``,  undefined, NaN, document.all

if(0){
    console.log("Hey");
}

// Truthy values

// console.log(true + false);
// true => 1 
// false => 0
// 1 + 0 = 1

// null + 1
// null => 0 -> falsy values 
// 0 + 1 = 1

// 5 + "5" 
// "55"


// -->  !!undefined ?
// -->  !undefined => true
// -->  !!undefined => false














