let ok = document.getElementById('ok')
let ar = document.getElementById('area');
ar.addEventListener('input', function(e){
    ok.innerHTML = ar.value.length;
});