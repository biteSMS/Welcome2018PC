import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //开启history模式需要后端配合
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '/training',
      name: 'Training',
      component: () => import('./views/Training.vue')
    },
    {
      path: '/activity',
      name: 'Activity',
      component: () => import('./views/Activity.vue'),
      //redirect: '/activity/smile',
      children: [
        {
          path: 'smile',
          name: 'Smile',
          component: () => import('./components/Vmap/Vmap.vue')
        },
        {
          path: 'wenda/:class/:page',
          name: 'WenDa',
          component: () => import('./components/WenDa/WenDa.vue')
        }
      ]
    },
    {
      path: '/data',
      name: 'Data',
      component: () => import('./views/Data.vue')
    },
    {
      path: '/raiders',
      name: 'Raiders',
      component: () => import('./views/Raiders.vue')
    },
    {
      path: '/style',
      name: 'Style',
      component: () => import('./views/Style.vue')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue')
    }
  ]
})
