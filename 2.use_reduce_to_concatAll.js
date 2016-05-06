var Rx = require('Rx');

function concatAll(source) {
  return source.reduce(function (a, b) {
    return a.concat(b);
  });
}
var source = Rx.Observable.from([[0, 1, 2], [3, 4, 5], [6, 7, 8]]);

// We would use it like this:
concatAll();