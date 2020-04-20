import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router'
import routes from "./routes"

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter)
Vue.use(BootstrapVue);

new Vue({
  router: new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: "active",
  }),
  el: '#app',
  render: h => h(App),
});