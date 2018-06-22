import Vue from 'vue';
import Router from 'vue-router';

// Components
import resume from '@/components/resume';
import codestyle from '@/components/codestyle';
import notFound from '@/components/not-found';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resume',
      component: resume
    },
    {
      path: '/codestyle',
      name: 'codestyle',
      component: codestyle
    },
    {
      path: '/404',
      name: '404',
      component: notFound
    },
    {
      path: '*',
      redirect: '/404',
    }
  ]
});
