var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('Paketering, leverans och uppföljning');

fill;
