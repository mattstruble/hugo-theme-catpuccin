// element argument can be a selector string
//   for an individual element
// Initialize Masonry only after images are loaded to avoid layout shift
(function() {
  var grid = document.querySelector('.grid');
  if (!grid) return;

  function reveal() {
    grid.classList.add('is-ready');
  }

  var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    horizontalOrder: true,
    percentPosition: true,
    fitWidth: true
  });

  function layout() {
    msnry.layout();
  }

  // If imagesLoaded is present, use it to wait for images; fallback to DOMContentLoaded
  if (window.imagesLoaded) {
    imagesLoaded(grid, function() {
      layout();
      reveal();
    });
  } else {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      layout();
      reveal();
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        layout();
        reveal();
      });
    }
  }

  // Relayout on window resize to maintain proper column flow
  var resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(layout, 150);
  });
})();
