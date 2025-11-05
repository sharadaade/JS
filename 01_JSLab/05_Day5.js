// Write a JavaScript program to print all Nth digit prime numbers
let n = 2;
let start = Math.pow(10, n-1);
let end = Math.pow(10, n);

for(let i = start; i < end; i++){
    let count = 0;
    for(let j = 1; j <= i; j++){
        
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(i + " ");
    }
}