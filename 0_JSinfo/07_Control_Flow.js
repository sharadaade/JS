// While, do-while, for, foreach
// ===================================================

// let a = 3;
// while(0 < 3){
//     console.log(a);
//     a--;
// }

// let i = 0;
// if(i < 3){
//     console.log(i);
//     i++;
// }


// let i = 0;
// for(; i < 3;){
//     console.log(i++); // 0 1 2
// }

// for(;){ // Syntax error
//     console.log("Hey");
// }


// let sum = 0;
// while(true){
//     let value = +prompt("Enter a number ");
//     if(!value)
//         break;
//     sum = sum + value;
// }
// alert('Sum : ' + sum);

// let i = 0;
// if(i < 5){
//     alert(i);
//     continue;
// }

// NOTE : break and continue only occur in for, while or do-while loop;
// if try to use break and continue in if or if-else it shows syntax error

// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 3; j++){
//         console.log(`${i}${j} `);
//     }
//     console.log(`\n`);
// }


// TASK -
// let i = 3;
// while(i){
//     console.log(i--);
// }

// confirm(`Are you sure`);



// Prime number 

// let n = 7;
// let count = 0;
// for(let i = 1; i <= n; i++){
//     if(n % i == 0){
//         count++;
//     }
// }
// if(count == 2){
//     console.log(`${n} is prime number`);
// }else{
//     console.log(`${n} is not prime number`);
// }


// let ch = 4;
// switch(ch){
//     case 1:
//         console.log('Ok');
//         break;

//     case 2:
//         console.log('Not Ok');
//         break;

// }

// Note:- in switch case of JS default is optional

// switch to if else
// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;

//     default:
//         alert('We hope that this page looks ok!');
// }


// Way - 1
// let browser = 'Firefox';
// if(browser == 'Edge'){
//     console.log("You've got the Edge!");
// }else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
//     console.log('Okay we support these browsers too');
// }else{
//     console.log('We hope that this page looks ok!');
// }


// Way - 2
// =========================
// let browser = 'Firefox';
// if(browser == 'Edge'){
//     console.log("You've got the Edge!");
// }else if(browser == 'Chrome'){
//     console.log('Okay we support these browsers too');
// }else if(browser == 'Firefox'){
//     console.log('Okay we support these browsers too');
// }else if(browser == 'Safari'){
//     console.log('Okay we support these browsers too');
// }else if(browser == 'Opera'){
//     console.log('Okay we support these browsers too');
// }else{
//     console.log('We hope that this page looks ok!');
// }



// Convert if to switch
// let a = +prompt('a?', '');
// if (a == 0) {
//     alert(0);
// }
// if (a == 1) {
//     alert(1);
// }
// if (a == 2 || a == 3) {
//     alert('2,3');
// }


//

// let x = + prompt('x?', 2);
// switch(x){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2, 3');
//         break;
// }


// let ch = 1;
// switch (ch) {
//     case 1:
//         console.log("One");
//         break;
//     case 2:
//         console.log("Two");
//         break;
//     case 3:
//         console.log("Three");
//         break;
//     default:
//         console.log("Invalid")
//         break;
// }

    

// const person = { name: "Sharad", age: 21 };
// for (let key in person) {
//     console.log(key, person[key]);
// }
