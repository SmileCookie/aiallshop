import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/Home"
import Detail from "@/pages/Detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path : '/Detail',
      name : "Detail",
      component : Detail
    }
  ]
})
