document.addEventListener('DOMContentLoaded', function () {
  var motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  var navigation = document.querySelector('.greedy-nav');
  var links = navigation ? Array.from(navigation.querySelectorAll('.masthead__menu-item:not(.masthead__menu-home-item) a[href*="#"]')) : [];
  var sections = [];

  links.forEach(function (link) {
    var id = new URL(link.href, location.href).hash;
    var target = id && document.getElementById(id.slice(1));
    if (target && !sections.some(function (section) { return section.id === id; })) {
      sections.push({ id: id, target: target });
    }
  });

  function headerHeight() {
    var header = document.querySelector('.masthead');
    return header ? header.getBoundingClientRect().height : 0;
  }

  function updateNavigation() {
    var position = window.scrollY + headerHeight() + 70;
    var current = sections.length ? sections[0].id : '';
    sections.forEach(function (section) {
      var top = section.target.getBoundingClientRect().top + window.scrollY;
      if (top <= position) current = section.id;
    });
    links.forEach(function (link) {
      if (new URL(link.href, location.href).hash === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  var pending = false;
  window.addEventListener('scroll', function () {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () { updateNavigation(); pending = false; });
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  if (document.querySelector('#main')) new ResizeObserver(updateNavigation).observe(document.querySelector('#main'));
  updateNavigation();

  document.addEventListener('click', function (event) {
    var link = event.target.closest('.greedy-nav a[href*="#"]');
    if (!link) return;
    var hash = new URL(link.href, location.href).hash;
    var target = hash && document.getElementById(hash.slice(1));
    if (!target) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    var top = hash === '#about-me' ? 0 : target.getBoundingClientRect().top + window.scrollY - headerHeight() - 20;
    window.scrollTo({ top: Math.max(0, top), behavior: motionPreference.matches ? 'auto' : 'smooth' });
    history.replaceState(null, '', hash);
    var hidden = navigation.querySelector('.hidden-links');
    var button = navigation.querySelector('button');
    if (hidden && !hidden.classList.contains('hidden') && button) button.click();
    updateNavigation();
  }, true);

  if (!window.jQuery || !window.jQuery.magnificPopup) return;
  var $ = window.jQuery;
  var activeImage = null;
  var scale = 1;
  var offsetX = 0;
  var offsetY = 0;
  var pointers = new Map();
  var pinchDistance = 0;
  var pinchScale = 1;
  var previousPoint = null;
  var cleanupImage = null;

  function paint() {
    if (!activeImage) return;
    var limitX = Math.max(0, (activeImage.offsetWidth * scale - window.innerWidth) / 2 + 40);
    var limitY = Math.max(0, (activeImage.offsetHeight * scale - window.innerHeight) / 2 + 70);
    offsetX = Math.max(-limitX, Math.min(limitX, offsetX));
    offsetY = Math.max(-limitY, Math.min(limitY, offsetY));
    if (scale === 1) offsetX = offsetY = 0;
    activeImage.style.transform = 'translate(' + offsetX + 'px,' + offsetY + 'px) scale(' + scale + ')';
    activeImage.classList.toggle('figure-zoomed', scale > 1);
    var reset = document.querySelector('.figure-controls [data-zoom="reset"]');
    if (reset) reset.textContent = Math.round(scale * 100) + '%';
  }

  function zoom(value) { scale = Math.max(1, Math.min(5, value)); paint(); }

  function attachViewer() {
    var instance = $.magnificPopup.instance;
    var image = document.querySelector('.mfp-img');
    if (!instance || !instance.isOpen || !image) return;
    if (image === activeImage) return;
    if (cleanupImage) cleanupImage();
    document.querySelectorAll('.figure-controls').forEach(function (control) { control.remove(); });
    instance.st.closeOnContentClick = false;
    instance.st.gallery.navigateByImgClick = false;
    instance.st.removalDelay = motionPreference.matches ? 0 : 180;
    activeImage = image;
    scale = 1;
    offsetX = offsetY = 0;
    pointers.clear();
    image.classList.add('figure-zoomable');

    var controls = document.createElement('div');
    controls.className = 'figure-controls';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', 'Image zoom');
    controls.innerHTML = '<button type="button" data-zoom="out" aria-label="Zoom out">−</button><button type="button" data-zoom="reset" aria-label="Reset zoom">100%</button><button type="button" data-zoom="in" aria-label="Zoom in">+</button>';
    document.querySelector('.mfp-wrap').appendChild(controls);
    controls.addEventListener('click', function (event) {
      event.stopPropagation();
      var button = event.target.closest('button');
      if (!button) return;
      var action = button.getAttribute('data-zoom');
      zoom(action === 'in' ? scale * 1.25 : action === 'out' ? scale / 1.25 : 1);
    });

    function wheel(event) { event.preventDefault(); zoom(scale * (event.deltaY < 0 ? 1.15 : 1 / 1.15)); }
    function doubleClick(event) { event.preventDefault(); event.stopPropagation(); zoom(scale > 1 ? 1 : 2); }
    function down(event) {
      event.preventDefault();
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      image.setPointerCapture(event.pointerId);
      previousPoint = { x: event.clientX, y: event.clientY };
      if (pointers.size === 2) {
        var points = Array.from(pointers.values());
        pinchDistance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
        pinchScale = scale;
      }
      if (scale > 1) image.classList.add('figure-dragging');
    }
    function move(event) {
      if (!pointers.has(event.pointerId)) return;
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (pointers.size === 2) {
        var points = Array.from(pointers.values());
        var distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
        if (pinchDistance) zoom(pinchScale * distance / pinchDistance);
      } else if (scale > 1 && previousPoint) {
        offsetX += event.clientX - previousPoint.x;
        offsetY += event.clientY - previousPoint.y;
        paint();
      }
      previousPoint = { x: event.clientX, y: event.clientY };
    }
    function up(event) {
      pointers.delete(event.pointerId);
      previousPoint = pointers.size ? Array.from(pointers.values())[0] : null;
      if (!pointers.size) image.classList.remove('figure-dragging');
    }
    image.addEventListener('wheel', wheel, { passive: false });
    image.addEventListener('dblclick', doubleClick);
    image.addEventListener('pointerdown', down);
    image.addEventListener('pointermove', move);
    image.addEventListener('pointerup', up);
    image.addEventListener('pointercancel', up);
    cleanupImage = function () {
      image.removeEventListener('wheel', wheel);
      image.removeEventListener('dblclick', doubleClick);
      image.removeEventListener('pointerdown', down);
      image.removeEventListener('pointermove', move);
      image.removeEventListener('pointerup', up);
      image.removeEventListener('pointercancel', up);
    };
    paint();
  }

  var popupEvents = $(document).add($('.image-popup'));
  popupEvents.on('mfpOpen mfpChange mfpImageLoadComplete', function () { requestAnimationFrame(attachViewer); });
  popupEvents.on('mfpClose', function () {
    if (cleanupImage) cleanupImage();
    cleanupImage = null;
    activeImage = null;
    pointers.clear();
    document.querySelectorAll('.figure-controls').forEach(function (control) { control.remove(); });
  });
});
