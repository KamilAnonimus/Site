(function(a) {
  let timerId = setTimeout(function tick() {
    var parent = document.querySelector('.img-container');
    var first = parent.querySelector('.item-img');
    var i = 0 //надо сделать чтобы при наведении i был равен 1
    document.addEventListener('mouseover', function() {
      i += 1;
    })
    if (i === 0) {parent.appendChild(first);
    timerId = setTimeout(tick, 7000);
    }
  }, 7000);

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
      }
    });
  }).call(this);