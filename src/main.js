import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import { store } from './store';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(VueRouter);
import SearchByTitle from './components/SearchByTitle';
import FavoriteMovies from './components/FavoriteMovies';
import MovieDetail from './components/MovieDetail';
import Review from './components/Review';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/search',
      component: SearchByTitle
    },
    {
      path: '/favorites',
      component: FavoriteMovies
    },
    {
      path: '/detail',
      component: MovieDetail
    },
    {
      path: '/review',
      component: Review
    }
  ]
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
