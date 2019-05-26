import 'Styles/main.scss';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { routes } from './router/routes';
import { store } from './store/store';

Vue.use(VueRouter);
Vue.use(VeeValidate);

library.add(fas, far, fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
