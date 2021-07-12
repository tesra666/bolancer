function debounce(fn, wait = 50) {
  let tId = null;
  let context = null;
  let args = null;
  let lastTriggerTime = 0;
  let result = null;

  const later = function () {
    const last = Date.now() - lastTriggerTime;

    if (last < wait && last > 0) {
      setTimeout(later, wait - last);
    } else {
      result = fn.apply(context, args);
      // @ts-ignore
      context = args = null;
      tId = null;
    }
  };
  return function () {
    // @ts-ignore
    context = this;
    args = arguments;
    lastTriggerTime = Date.now();

    if (!tId) {
      tId = setTimeout(later, wait);
    }

    return result;
  };
}

function setLanguage(lang = 'en') {
  localStorage.setItem('lang', lang);
}

function getLanguage() {
  return localStorage.getItem('lang');
}

// function scrollToTop() {
//   let c =
//     window.pageYOffset ||
//     document.documentElement.scrollTop ||
//     document.body.scrollTop;
//   if (c > 0) {
//     window.requestAnimationFrame(scrollToTop);
//     window.scrollTo(0, c - c / 8);
//   } else {
//     window.cancelAnimationFrame(scrollToTop);
//   }
// }

function scrollToTop() {
  window.scroll({
    left: 0,
    top: 0,
    behavior: 'smooth'
  })
}

/**
 * 数值格式化显示
 * @param {*} num
 * @param {*} len 小数位数
 */
function toFixedFloor(num, len = 2) {
  const n = (+num).toFixed(len + 1);
  return n.slice(0, n.length - 1);
}
