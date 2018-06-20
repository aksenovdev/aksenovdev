import Vue from 'vue';
import slide from '../helpers/slide';

Vue.mixin({
  methods: {
    slideToggle(ev) {
      const el = ev.target;
      el.classList.toggle('active');
      const sel = el.dataset.slide;
      slide.slideToggle(sel);
    }
  }
});
