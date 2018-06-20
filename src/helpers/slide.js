const DEF_TIME_EXEC = 20;
const DEF_TIME = 500;

export default {
  slideDown(sel, timeMs = DEF_TIME) {
    const slideEl = document.querySelector(sel);
    const hEl = slideEl.scrollHeight;
    let currH = 0;
    const step = hEl * DEF_TIME_EXEC / timeMs;
    const timer = setInterval(
      () => {
        currH += step;
        slideEl.style.height = `${currH}px`;
        if (currH > hEl) {
          requestAnimationFrame(() => {
            slideEl.style.height = '';
            slideEl.style.overflow = 'auto';
          });
          clearInterval(timer);
        }
      }, DEF_TIME_EXEC
    );
  },
  slideUp(sel, timeMs = DEF_TIME) {
    const slideEl = document.querySelector(sel);
    slideEl.style.overflow = 'hidden';
    let hEl = slideEl.offsetHeight;
    const step = hEl * DEF_TIME_EXEC / timeMs;
    const timer = setInterval(
      () => {
        hEl -= step;
        slideEl.style.height = `${hEl}px`;
        if (hEl < 0) {
          requestAnimationFrame(() => {
            slideEl.style.height = '0px';
          });
          clearInterval(timer);
        }
      }, DEF_TIME_EXEC
    );
  },
  slideToggle(sel, timeMs = DEF_TIME) {
    const slideEl = document.querySelector(sel);
    if (slideEl.style.height === '0px') {
      this.slideDown(sel, timeMs);
    } else {
      this.slideUp(sel, timeMs);
    }
  }
};
