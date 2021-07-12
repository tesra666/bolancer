(function (win) {
  var doc = win.document;
  var docEl = doc.documentElement;
  var tid;
  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    // if (width > 750) {
    //   width = 750;
    // }
    if (width > 375) {
      width = 375;
    }
    var rem = width / 7.5;
    docEl.style.fontSize = rem + 'px';
  }
  win.addEventListener(
    'resize',
    function () {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    },
    false
  );
  win.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    },
    false
  );
  refreshRem();
})(window);
