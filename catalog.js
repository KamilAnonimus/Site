document.querySelector('#elastic').oninput = function() {
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

const border_HIPERVRNEo = document.getElementById('four');
const border_CrucialCT240BX500SSD1 = document.getElementById('nineteen');
var categori = document.querySelector('#categories');
var arrow = document.querySelector('#arrow');
var ticks1 = document.querySelector('.buttons');
var ul = document.querySelector('ul');
var i = 1
categori.onclick = function() {
    i += 1
    function even(i){
        if(Number.isInteger(i) == true){return i % 2 == 0}else{return undefined}
     }
    if (even(i) === true) {
        arrow.style.transform = 'rotate(-45deg)';
        ticks1.style.display = 'block';
        ul.style.display = 'block';
    }
    if (even(i) === false) {
        arrow.style.transform = 'rotate(-225deg)';
        ticks1.style.display = 'none';
        ul.style.display = 'none';
    }
}

var mark_one = document.querySelector('.mark_one')
var name1 = document.querySelector('#name1')
var a = 1
name1.onclick = function () {
    a += 1
    function mark1(a){
        if(Number.isInteger(a) == true){return a % 2 == 0}else{return undefined}
     }
    if (mark1(a) === true) {
        mark_one.style.display = 'block';
        mark_two.style.display = 'none';
        mark_three.style.display = 'none';
        mark_four.style.display = 'none';
        mark_five.style.display = 'none';
        mark_six.style.display = 'none';
    }
    function mark2(b){
        if(Number.isInteger(b) == true){return b % 2 == 0}else{return undefined}
     }
     if (mark2(b) === true) {
        b += 1;
    }
    function mark3(c){
        if(Number.isInteger(c) == true){return c % 2 == 0}else{return undefined}
     }
     if (mark3(c) === true) {
        c += 1;
    }
    function mark4(d){
        if(Number.isInteger(d) == true){return d % 2 == 0}else{return undefined}
     }
     if (mark4(d) === true) {
        d += 1;
    }
    function mark5(e){
        if(Number.isInteger(e) == true){return e % 2 == 0}else{return undefined}
     }
     if (mark5(e) === true) {
        e += 1;
    }
    function mark6(f){
        if(Number.isInteger(f) == true){return f % 2 == 0}else{return undefined}
     }
     if (mark6(f) === true) {
        f += 1;
    }
}

var mark_two = document.querySelector('.mark_two')
var name2 = document.querySelector('#name2')
var b = 1
name2.onclick = function () {
    b += 1
    function mark2(b){
        if(Number.isInteger(b) == true){return b % 2 == 0}else{return undefined}
     }
    if (mark2(b) === true) {
        mark_one.style.display = 'none';
        mark_two.style.display = 'block';
        mark_three.style.display = 'none';
        mark_four.style.display = 'none';
        mark_five.style.display = 'none';
        mark_six.style.display = 'none';
    }
    function mark1(a){
        if(Number.isInteger(a) == true){return a % 2 == 0}else{return undefined}
     }
     if (mark1(a) === true) {
        a += 1;
    }
    function mark3(c){
        if(Number.isInteger(c) == true){return c % 2 == 0}else{return undefined}
     }
     if (mark3(c) === true) {
        c += 1;
    }
    function mark4(d){
        if(Number.isInteger(d) == true){return d % 2 == 0}else{return undefined}
     }
     if (mark4(d) === true) {
        d += 1;
    }
    function mark5(e){
        if(Number.isInteger(e) == true){return e % 2 == 0}else{return undefined}
     }
     if (mark5(e) === true) {
        e += 1;
    }
    function mark6(f){
        if(Number.isInteger(f) == true){return f % 2 == 0}else{return undefined}
     }
     if (mark6(f) === true) {
        f += 1;
    }
}

var mark_three = document.querySelector('.mark_three')
var name3 = document.querySelector('#name3')
var c = 1
name3.onclick = function () {
    border_HIPERVRNEo.style.top = '-86px';
    c += 1
    function mark3(c){
        if(Number.isInteger(c) == true){return c % 2 == 0}else{return undefined}
     }
    if (mark3(c) === true) {
        mark_one.style.display = 'none';
        mark_two.style.display = 'none';
        mark_three.style.display = 'block';
        mark_four.style.display = 'none';
        mark_five.style.display = 'none';
        mark_six.style.display = 'none';
    }
    function mark1(a){
        if(Number.isInteger(a) == true){return a % 2 == 0}else{return undefined}
     }
     if (mark1(a) === true) {
        a += 1;
    }
    function mark2(b){
        if(Number.isInteger(b) == true){return b % 2 == 0}else{return undefined}
     }
     if (mark2(b) === true) {
        b += 1;
    }
    function mark4(d){
        if(Number.isInteger(d) == true){return d % 2 == 0}else{return undefined}
     }
     if (mark4(d) === true) {
        d += 1;
    }
    function mark5(e){
        if(Number.isInteger(e) == true){return e % 2 == 0}else{return undefined}
     }
     if (mark5(e) === true) {
        e += 1;
    }
    function mark6(f){
        if(Number.isInteger(f) == true){return f % 2 == 0}else{return undefined}
     }
     if (mark6(f) === true) {
        f += 1;
    }
}

var mark_four = document.querySelector('.mark_four')
var name4 = document.querySelector('#name4')
var d = 1
name4.onclick = function () {
    border_CrucialCT240BX500SSD1.style.top = '-74px';
    d += 1
    function mark4(d){
        if(Number.isInteger(d) == true){return d % 2 == 0}else{return undefined}
     }
    if (mark4(d) === true) {
        mark_one.style.display = 'none';
        mark_two.style.display = 'none';
        mark_three.style.display = 'none';
        mark_four.style.display = 'block';
        mark_five.style.display = 'none';
        mark_six.style.display = 'none';
    }
    function mark1(a){
        if(Number.isInteger(a) == true){return a % 2 == 0}else{return undefined}
     }
     if (mark1(a) === true) {
        a += 1;
    }
    function mark2(b){
        if(Number.isInteger(b) == true){return b % 2 == 0}else{return undefined}
     }
     if (mark2(b) === true) {
        b += 1;
    }
    function mark3(c){
        if(Number.isInteger(c) == true){return c % 2 == 0}else{return undefined}
     }
     if (mark3(c) === true) {
        c += 1;
    }
    function mark5(e){
        if(Number.isInteger(e) == true){return e % 2 == 0}else{return undefined}
     }
     if (mark5(e) === true) {
        e += 1;
    }
    function mark6(f){
        if(Number.isInteger(f) == true){return f % 2 == 0}else{return undefined}
     }
     if (mark6(f) === true) {
        f += 1;
    }
}

var mark_five = document.querySelector('.mark_five')
var name5 = document.querySelector('#name5')
var e = 1
name5.onclick = function () {
    e += 1
    function mark5(e){
        if(Number.isInteger(e) == true){return e % 2 == 0}else{return undefined}
     }
    if (mark5(e) === true) {
        mark_one.style.display = 'none';
        mark_two.style.display = 'none';
        mark_three.style.display = 'none';
        mark_four.style.display = 'none';
        mark_five.style.display = 'block';
        mark_six.style.display = 'none';
    }
    function mark1(a){
        if(Number.isInteger(a) == true){return a % 2 == 0}else{return undefined}
     }
     if (mark1(a) === true) {
        a += 1;
    }
    function mark2(b){
        if(Number.isInteger(b) == true){return b % 2 == 0}else{return undefined}
     }
     if (mark2(b) === true) {
        b += 1;
    }
    function mark3(c){
        if(Number.isInteger(c) == true){return c % 2 == 0}else{return undefined}
     }
     if (mark3(c) === true) {
        c += 1;
    }
    function mark4(d){
        if(Number.isInteger(d) == true){return d % 2 == 0}else{return undefined}
     }
     if (mark4(d) === true) {
        d += 1;
    }
}

var mark_six = document.querySelector('.mark_six')
var name6 = document.querySelector('#name6')
var f = 1
name6.onclick = function () {
    border_HIPERVRNEo.style.top = '-80px';
    border_CrucialCT240BX500SSD1.style.top = '-80px';
    f += 1
    function mark6(f){
        if(Number.isInteger(f) == true){return f % 2 == 0}else{return undefined}
     }
    if (mark6(f) === true) {
        mark_one.style.display = 'none';
        mark_two.style.display = 'none';
        mark_three.style.display = 'none';
        mark_four.style.display = 'none';
        mark_five.style.display = 'none';
        mark_six.style.display = 'block';
    }
    function mark1(a){
        if(Number.isInteger(a) == true){return a % 2 == 0}else{return undefined}
     }
     if (mark1(a) === true) {
        a += 1;
    }
    function mark2(b){
        if(Number.isInteger(b) == true){return b % 2 == 0}else{return undefined}
     }
     if (mark2(b) === true) {
        b += 1;
    }
    function mark3(c){
        if(Number.isInteger(c) == true){return c % 2 == 0}else{return undefined}
     }
     if (mark3(c) === true) {
        c += 1;
    }
    function mark4(d){
        if(Number.isInteger(d) == true){return d % 2 == 0}else{return undefined}
     }
     if (mark4(d) === true) {
        d += 1;
    }
    function mark5(e){
        if(Number.isInteger(e) == true){return e % 2 == 0}else{return undefined}
     }
     if (mark5(e) === true) {
        e += 1;
    }
}

const filter = document.querySelectorAll('.borders_catalog');

document.querySelector('#ul').addEventListener('click', (filt) => {
    if (filt.target.tagName !== 'LI') return false;

    let filterClass = filt.target.dataset['f'];
    filter.forEach(elem => {
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
        } else {
            elem.classList.remove('hide');
        }
    });
});