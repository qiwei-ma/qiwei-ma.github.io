document.addEventListener('DOMContentLoaded', function () {
  // 项目图排版约定，后续新增图片也沿用：桌面端以右侧实际内容高度为上限，
  // 等比例缩放，不裁切、不补白；在左侧栏上下左右居中，保留 5px 圆角。
  // 期刊标签相对图片顶部向上超出 10px，左边统一相对左栏向外超出 10px。
  // 图片较窄时也要保持标签左边缘对齐，不随居中的图片一起向右移动。
  // 修改文字、行距或段距后须自动重算尺寸；手机单栏按可用宽度显示，
  // 不用 display: contents 的文字容器高度限制图片。
  document.querySelectorAll('.paper-box').forEach(function (card) {
    var column = card.querySelector('.paper-box-image');
    var figure = card.querySelector('.paper-box-figure');
    var image = figure && figure.querySelector('img');
    var text = card.querySelector('.paper-box-text');
    if (!column || !figure || !image || !text) return;

    function alignBadge() {
      var offset = column.getBoundingClientRect().left - figure.getBoundingClientRect().left - 10;
      figure.style.setProperty('--paper-badge-left', offset + 'px');
    }

    function fitFigure() {
      if (!window.matchMedia('(min-width: 768px)').matches || !image.naturalWidth) {
        figure.style.width = '';
        alignBadge();
        return;
      }
      var ratio = image.naturalWidth / image.naturalHeight;
      var textBounds = text.getBoundingClientRect();
      var lastContent = text.lastElementChild;
      // 排除末段外边距，避免段距收紧后图片仍按包含空白的容器高度放大。
      var contentBottom = lastContent ? lastContent.getBoundingClientRect().bottom : textBounds.bottom;
      var contentHeight = Math.max(0, contentBottom - textBounds.top);
      if (!contentHeight) {
        figure.style.width = '';
        alignBadge();
        return;
      }
      var width = Math.min(column.clientWidth, 400, contentHeight * ratio);
      figure.style.width = width + 'px';
      alignBadge();
    }

    var observer = new ResizeObserver(fitFigure);
    observer.observe(column);
    observer.observe(text);
    image.addEventListener('load', fitFigure);
    window.addEventListener('resize', fitFigure);
    fitFigure();
  });
});
