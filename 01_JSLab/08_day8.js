// console.log('Hey');

let ok = document.getElementById('ok')
document.addEventListener('keypress', function(e){
    // console.log(e.key);
    ok.textContent = e.key;
});





