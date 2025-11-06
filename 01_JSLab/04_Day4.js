
// Progress bar
// let data = "="
// for(let i = 1; i <= 10; i++){
//     let str="";
//     let per = 0;
//     for(let j = 1; j <= i; j++){
//         str+=data;
//         per+= 10;
//     }
//     console.log(`Progress ${per}% ` + str);
// }


let pass = 'Test123';
let isUpper = false;
let isLower = false;
let isDigit = false;
for (let i = 0; i < pass.length; i++) {
    if (pass.charAt(i) >= '0' && pass.charAt(i) <= '9') {
        isDigit = true;
    }
    else if (pass.charAt(i) >= 'a' && pass.charAt(i) <= 'z') {
        isLower = true;
    }
    else if (pass.charAt(i) >= 'A' && pass.charAt(i) <= 'Z') {
        isUpper = true;
    }
}
if (isUpper && isDigit) {
    console.log("strong password");
}
else if (islower && isDigit) {
    console.log("medium Password");
}
else if (isUpper && isLower) {
    console.log("medium password");
}


/*
    Estimating Probability with Fixed Number of Trials
------
    Simulate a simple coin toss experiment for a fixed number of trials to estimate the probability of getting heads.

-   The for loop runs for numberOfTrials. In each iteration, Math.random() simulates  a coin toss. It counts the number of "heads" (random number < 0.5), allowing for a simple probability estimation.

    Note : using the number of fixed iterations of for loop you have to count the number of heads you got between the 1 to N and calculate the average. generate the random number using the Math.random() function if the generated value id less than 0.5 its heads else its tails if you got the head increment the head count.

    Note : Testcases may vary the output will not be same every time because random value will be generated.

        sample input : numberOfTrials = 50
        sample output:  50 Coin Toss Trials
                Total Heads: 19
                Estimated Probability of Heads: 38.00%

        sample input : numberOfTrials = 1000
        sample output:  1000 Coin Toss Trials
                Total Heads: 495
                Estimated Probability of Heads: 49.50%
*/

let count = 0;
let numberOfTrials = 50;

for(let i = 1; i <= 50; i++){
    let n = Math.random();
    if(n<0.5){
        count++;
    }
}
let percentage = (count * 100) / numberOfTrials;
console.log(percentage + "%");
