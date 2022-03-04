document.querySelector('.carousel-module').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.carousel-module').addEventListener('touchmove', handleTouchMove, false);
let x1 = null;
let y1 = null;
function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY
}

function handleTouchMove(event) {
  var parent = document.querySelector('.img-container');
  var first = parent.querySelector('.item-img');
  var last = parent.querySelector('.item-img:last-child');
  if (!x1 || !y1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;
  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) parent.insertBefore(last, first);
    else parent.appendChild(first);
  }
  x1 = null;
  y1 = null;
}

(function(a) {
  let timerId = setTimeout(function tick() {
  var parent = document.querySelector('.img-container');
  var first = parent.querySelector('.item-img');
  parent.appendChild(first);
  timerId = setTimeout(tick, 7000);
  }, 7000);
  document.querySelector('.img-container').addEventListener('mouseover', function (b) {
    clearTimeout(timerId);
  });

  document.querySelector('.img-container').addEventListener('mouseout', function (b) {
      let timerId = setTimeout(function tick() {
      var parent = document.querySelector('.img-container');
      var first = parent.querySelector('.item-img');
      parent.appendChild(first);
      timerId = setTimeout(tick, 7000);
      }, 7000);
      document.querySelector('.img-container').addEventListener('mouseover', function (b) {
        clearTimeout(timerId);
      });
  });

  document.querySelector('.carousel-module').addEventListener('click', function(e) {
    var first, last, parent;
    parent = document.querySelector('.img-container');
    first = parent.querySelector('.item-img');
    last = parent.querySelector('.item-img:last-child');
    if (e.target.classList.contains('arrow-left')) {
      parent.appendChild(first);
    }
    if (e.target.classList.contains('arrow-right')) {
      parent.insertBefore(last, first);
    };
  });
}).call(this);