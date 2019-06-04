import Vue from 'vue';
import Router from 'vue-router';

import Kiki from '../views/Kiki';
import BusinessUnit from '../views/BusinessUnit';
import Timeline from '../views/TimeLine';
import Trombi from '../views/Trombi';
import Suggestions from '../views/Suggestions';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', name: 'home', component: Kiki },
    { path: '/kiki', name: 'kiki', component: Kiki },
    { path: '/bu', name: 'businessUnit', component: BusinessUnit },
    { path: '/timeline', name: 'timeline', component: Timeline },
    { path: '/trombi', name: 'trombi', component: Trombi },
    { path: '/suggestions', name: 'suggestions', component: Suggestions }
  ],
});
