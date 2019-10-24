// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import Http from "vue-resource"

Vue.use(Http);
Vue.config.productionTip = false

var iWith = document.documentElement.clientWidth;
//console.log(iWith);
var percentage = iWith / 640;
var fontSize = percentage * 100;
document.documentElement.style.fontSize = fontSize + "px";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
