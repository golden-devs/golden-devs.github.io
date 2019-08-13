'use strict';

const bottomPanel = document.getElementById('js-bottom-panel');

const intersectionObserver = new IntersectionObserver(function (entries) {
  const isPageTop = entries[0].intersectionRatio > 0;
  if (isPageTop) {
    bottomPanel.classList.remove('bottom-panel_hidden');
  } else {
    bottomPanel.classList.add('bottom-panel_hidden');
  }
});

intersectionObserver.observe(document.getElementById('js-page-top'));