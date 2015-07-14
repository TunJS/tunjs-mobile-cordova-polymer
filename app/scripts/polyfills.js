(function (window, document) {
  'use strict';
  if ('Promise' in window &&
    'resolve' in window.Promise &&
    'reject' in window.Promise &&
    'all' in window.Promise &&
    'race' in window.Promise &&
    (function () {
      var resolve;
      new window.Promise(function (r) {
        resolve = r;
      });
      return typeof resolve === 'function';
    }())) {} else {
    document.write('<script src="bower_components\/es6-promise\/promise.min.js"><\/script>'); // jshint ignore:line
  }
  if ('fetch' in window) {} else {
    document.write('<script src="bower_components\/fetch\/fetch.js"><\/script>'); // jshint ignore:line
  }
})(window, window.document);
