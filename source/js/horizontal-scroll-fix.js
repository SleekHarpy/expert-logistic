'use strict';

(function () {

  var onWindowScroll = function () {
    document.querySelector('.main-header').style.left = -window.pageXOffset + 'px';
  };

  window.addEventListener('scroll', onWindowScroll);

})();
