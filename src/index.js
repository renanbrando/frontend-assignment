import 'Styles/main.scss';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './router/routes';
import { store } from './store/store';

Vue.use(VueRouter)
Vue.config.productionTip = false

const state = store;

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
