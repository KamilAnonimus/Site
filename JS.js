(function(a) {
  // let timerId = setTimeout(function tick() {
  // var parent = document.querySelector('.img-container');
  // var first = parent.querySelector('.item-img');
  // parent.appendChild(first);
  // timerId = setTimeout(tick, 7000);
  // }, 7000);
  // document.querySelector('.img-container').addEventListener('mouseover', function (b) {
  //   clearTimeout(timerId);
  // });

  // document.querySelector('.img-container').addEventListener('mouseout', function (b) {
  //     let timerId = setTimeout(function tick() {
  //     var parent = document.querySelector('.img-container');
  //     var first = parent.querySelector('.item-img');
  //     parent.appendChild(first);
  //     timerId = setTimeout(tick, 7000);
  //     }, 7000);
  //     document.querySelector('.img-container').addEventListener('mouseover', function (b) {
  //       clearTimeout(timerId);
  //     });
  // });

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