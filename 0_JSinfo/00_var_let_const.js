// Variable => var, let, const
// Declaration and initialization (assignment)


// var
var a; // variable declaration
var a = 22; // variable declaration and variable initialization
a = 33; // reinitialization
//NOTE:- function scoped
// We can redeclare again and it does't show any error

function MyFunction() {
    if(true){
        var price = 40000;
    }
    console.log(price);
}
// MyFunction(); // Function call


function Fun() {
    var age = 22;
    console.log(age);
}
// console.log(age);


//##############################################################
// let 
let x; // Declaration
x = 22; // initialization or assignment
let z = 25; // Declaration + Initialization
// Note:- Re-declaration is not possible with let


//#############################################################
// const 
const PI = 3.14;


//############################################################
// Scope => global, block, function()

// var => function or global
// let => block

var m = 22;
// console.log(m);

// var => function or global level scope
{
    var n = 55;
}
// console.log(n);

// let => block level scope
{
    let gg = "GGG"
}
// console.log(gg);


//################################################################

// Temporal Dead Zone

let nani = "This is";
// console.log(nani);

//################################################################

// Hoisting impact per time
// 52:00 - watched


















