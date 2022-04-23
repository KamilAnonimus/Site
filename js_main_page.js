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