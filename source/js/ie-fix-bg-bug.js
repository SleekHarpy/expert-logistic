'use strict';

(function () {

  var fixIeBackground = function () {
    if (navigator.userAgent.match(/Trident\/7\./)) {
      document.body.addEventListener('mousewheel', function () {
        event.preventDefault();
        var wd = event.wheelDelta;
        var csp = window.pageYOffset;
        window.scrollTo(0, csp - wd);
      });
    }
  };

  fixIeBackground();

})();
