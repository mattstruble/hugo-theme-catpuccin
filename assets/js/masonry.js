// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  horizontalOrder: true,
  percentPosition: true,
  fitWidth: true
});

window.onload = function(e) {
  msnry.layout();
}
