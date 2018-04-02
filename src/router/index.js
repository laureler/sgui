import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

import Input from '@/views/basemodule/input'
//import Tree from '@/views/basemodule/tree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index 
    },
    {
      path: '/index',
      name: 'Index',
      component: Index 
    },
    {
      path: '/basemodule/input',
      name: 'Input',
      component: Input 
    },
     /*{
      path: '/basemodule/tree',
      name: 'Tree',
      component: Tree 
    },*/
  ]
})
