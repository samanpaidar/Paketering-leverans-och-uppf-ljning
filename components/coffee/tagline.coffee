$ = require('jquery')

do fill = (item = 'Paketering, leverans och uppföljning') ->
  $('.tagline').append "#{item}"
fill