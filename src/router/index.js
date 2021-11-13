import Vue from 'vue'
import VueRouter from 'vue-router'
import todos from '../views/MainWrap.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/todo'
  },
  {
    path:'/todo',
    component:todos,
    name:'todo'
  }
]

const router = new VueRouter({
  routes
})

export default router
