(function() {
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