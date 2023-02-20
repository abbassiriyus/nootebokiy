import VueRouter from 'vue-router'
import Main from "./components/Main.vue"
import Brand from './components/brand.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/brend',
      component: Brand
    }
  ]
})
