import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import Organisations from '../views/Organisations';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Kiki },
    { path: '/kiki', component: Kiki },
    { path: '/bu', component: BusinessUnit },
    { path: '/timeline', component: Timeline },
    { path: '/trombi', component: Trombi },
  ],
});
