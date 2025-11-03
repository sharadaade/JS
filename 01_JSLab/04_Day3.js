// Implement a simple countdown timer that displays numbers decreasing from a starting point until zero.

// - The while loop continues as long as countDown is greater than or equal to 0. In each iteration, it prints the current count and then decrements countDown, moving closer to the loop's termination.

//     Sample input :  countDown = 5
//     sample output : --- Countdown Start ---
//             5
//             4
//             3
//             2
//             1
//             0
//             --- Countdown End ---

//     Sample input : countDown = 3

//     Sample input : countDown = -2
//     Sample output : Loop condition false initially, negative values are not allowed.


// let num = -2;
// if (num < 0) {
//     console.log('negative values are not allowed.');
//     return;
// }
// while (num >= 0) {

//     console.log(num);
//     num--;
// }




// 2. Login attempt for three times
// let count = 0;
// let myPass = 1234;
// while(count <= 3){
//     let a = + prompt(`Enter the number in a`);
//     if(myPass == a){
//         console.log("LoggedIn");
//         break;
//     }else{
//         if(count == 3){
//             console.log("Three Attempt completed ! Try after sometime");
//         }else{
//             console.log(count+" Attempt completed ! Try again &  Tried pass is " + a);
//         }
//     }
//     count++;
// }



// 3. Data process until stop
// let condition = 0;
// while(true){
//     let data = prompt(`Enter data for processing`);
//     console.log(data + ` Processing on it`);
//     if(data == 'stop'){
//         break;
//     }
// }



// Guess number
// alert(`Guess the number ${targetNum}`)
while (true) {
    let targetNum = Math.floor(Math.random() * 10) + 1;
    if (targetNum == 7 || targetNum == 8 || targetNum == 9) {
        continue;
    } else {
        let guessNumber = + prompt("Enter the number");
        console.log(`Attempted is ${guessNumber}`);
        if (targetNum == guessNumber) {
            break;
        }
    }
}
