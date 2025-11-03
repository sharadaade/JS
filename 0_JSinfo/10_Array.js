// • Create and access arrays
// • Add/Remove items (push, pop, shift, unshift)
// • Loop through arrays (for, forEach, for...of)
// • Array methods: map(), filter(), reduce(), includes(), slice(), splice()
// • Mini Project: Todo List

// Start
const marvel = ["thor", "loki", "spider-man"]
const dc_hero = ["superman", "flash", "batman", "krish"]

// marvel.push(dc_hero); // add the element at end of array
// marvel.pop(); // remove the last element from array
// console.log(marvel);
// console.log(marvel[3]);
// console.log(marvel[3][2]); // To access array of element

// It adds array in array
// [
//   'thor', 'loki', 'spider-man', [ 'superman', 'flash', 'batman', 'krish' ]
// ]


// new fresh array with ... (spread operator)
let allHero = [...marvel, ...dc_hero]
// console.log(allHero);


// Nested nested array in simple array 
let num = [1, 2, 3, [3, 6, 88], [1, 3, 55, [1, 2, 4, [99, 77, 88]]]]
let fresh_num = num.flat(Infinity)
// console.log(nums);
// console.log(fresh_nums.sort());

// push, pop, shift, unshift
// ===========================
// push() => add element at end
// pop() => remove element from end
// shift() => remove element from start => Subtract => s - start
// unshift => add element at start => Upload => s - start

let arr = [5, 7, 8, 4, 2]
// console.log(arr.includes(9));
// console.log(arr.indexOf(9));

// slice, splice
arr.slice();
arr.splice();

// ## slice()
// The slice() method returns a shallow copy of a portion of an array (or string) without modifying the original.

// ## splice() 
// The splice() method changes (mutates) the contents of an array by removing, replacing, or adding elements.

/*
    🧩 Quick Memory Trick:
    Slice = “Cut a copy” 🍰 (non-destructive)
    Splice = “Cut and replace” ✂️ (destructive)
*/

/*
| Feature                | `slice()`               | `splice()`                     |
| ---------------------- | ----------------------- | ------------------------------ |
|   Purpose              | Copies part of an array | Adds/removes/replaces elements |
|   Modifies Original?   | ❌ No                    | ✅ Yes                        |
|   Returns              | New array (copied part) | Array of removed items         |
|   Usage Example        | `arr.slice(1, 3)`       | `arr.splice(1, 2, 'x')`        |
*/



