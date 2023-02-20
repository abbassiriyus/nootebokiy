import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from "./router/index";

Vue.use(VueRouter)


createApp(App).mount('#app')

import './assets/main.css'

new Vue({
  render: h =>(App),
  el: '#app',
  router
})