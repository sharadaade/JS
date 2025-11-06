// 1. Question
// function checkPasswordStrength(pass, len) {
//     let l = len
//     let pl = pass.length;
//     if (pl < l) {
//         return false;
//     }
//     let isDigit = false;
//     for (let i = 0; i < pl; i++) {
//         if (pass.charAt(i) >= '0' && pass.charAt(i) <= '9') {
//             isDigit = true;
//             break;
//         }
//     }
//     if (isDigit) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// let result = checkPasswordStrength('phgdjhf', 5);
// if(result){
//     console.log(result);
// }
// else{
//     console.log(result);
// }

// 2 Question
// function analyzeWordForVowelConsonant(word) {
//     let isVowel = false;
//     let isConsonant = false;
//     word.toLowerCase();
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
//             isVowel = true;
//             // break;
//         } else {
//             isConsonant = true;
//             // break;
//         }
//     }

//     if (isVowel) {
//         console.log('The string contains only vowels');
//     } else if (isConsonant) {
//         console.log('The string contains only consonants');
//     } else if (isVowel && isConsonant) {
//         console.log('The string contains vowels and consonants');
//     }
// }

// analyzeWordForVowelConsonant('ABC');


// 3 reverse word

function reverseWord(word){ // hello
    let rev = "";
    let l = word.length;
    for(let i = l - 1; i >= 0; i--){
        rev = rev + word[i];
    }
    return rev;
}
const rev = reverseWord("Hello")
console.log(rev);

