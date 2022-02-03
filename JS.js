const track = document.querySelector('.slider-track'),
      buttonsLeft = document.querySelector('.btn-prev'),
      buttonsRight = document.querySelector('.btn-next');

var position = 0

function prev(){
    position += 1200
    document.getElementById('slider-track').style.cssText = `right:${position}px;`;
}

function next(){
    position -= 1200
    document.getElementById('slider-track').style.cssText = `right:${position}px;`;
}