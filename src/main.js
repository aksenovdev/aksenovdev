// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Libaries
import 'normalize.css';
import 'tachyons';

import Vue from 'vue';
import router from './router';

// Components
import App from './app';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
});
