document.querySelector('#elastic').oninput = function(){
    let val = this.value.trim();
    let elasticName = document.querySelectorAll('.elastic li');
    if (val != "") {
        elasticName.forEach(function(elem){
            if(elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticName.forEach(function(elem){
            elem.classList.remove('hide');
        });
    }
}

var categori = document.querySelector('#categories');
var arrow = document.querySelector('#arrow');
var ticks1 = document.querySelector('#ticks1');
var i = 0
categori.onclick = function() {
    i += 1
    function even(i){
        if(Number.isInteger(i) == true){return i % 2 == 0}else{return undefined}
     }
    if (even(i) === true) {
        arrow.style.transform = 'rotate(-45deg)';
        ticks1.style.display = 'block';
    }
    if (even(i) === false) {
        arrow.style.transform = 'rotate(-225deg)';
        ticks1.style.display = 'none';
    }
}