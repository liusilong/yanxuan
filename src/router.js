/*global Vue*/
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ViewHome from '@/views/home'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'ViewHome',
      component: ViewHome
    }
  ]
})
