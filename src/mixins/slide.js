import Vue from 'vue';
import slidingjs from 'slidingjs';

Vue.mixin({
  methods: {
    slideToggle(ev) {
      const el = ev.target;
      el.classList.toggle('active');
      const sel = el.dataset.slide;
      slidingjs.slideToggle(sel);
    }
  }
});
