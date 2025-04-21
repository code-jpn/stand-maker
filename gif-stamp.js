let textarea = document.getElementById('textarea');
let text = document.getElementById('text'); 

textarea.addEventListener('change', function(){
    text.innerText = textarea.value
}, false);
