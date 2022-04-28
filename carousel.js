/*
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 1000,
  });
  */

  var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});