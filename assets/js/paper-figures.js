document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.paper-box').forEach(function (card) {
    var column = card.querySelector('.paper-box-image');
    var figure = card.querySelector('.paper-box-figure');
    var image = figure && figure.querySelector('img');
    var text = card.querySelector('.paper-box-text');
    if (!column || !figure || !image || !text) return;

    function fitFigure() {
      if (!window.matchMedia('(min-width: 768px)').matches || !image.naturalWidth) {
        figure.style.width = '';
        return;
      }
      var ratio = image.naturalWidth / image.naturalHeight;
      var width = Math.min(column.clientWidth, 400, text.getBoundingClientRect().height * ratio);
      figure.style.width = width + 'px';
    }

    var observer = new ResizeObserver(fitFigure);
    observer.observe(column);
    observer.observe(text);
    image.addEventListener('load', fitFigure);
    window.addEventListener('resize', fitFigure);
    fitFigure();
  });
});
