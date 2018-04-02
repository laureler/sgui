import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Input from '@/views/basemodule/input'
import imgToBase64 from '@/views/basemodule/imgToBase64'
import formatDate from '@/views/basemodule/formatDate'


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
    {
      path: '/basemodule/imgToBase64',
      name: 'imgToBase64',
      component: imgToBase64 
    },
    {
      path: '/basemodule/formatDate',
      name: 'formatDate',
      component: formatDate 
    }

  ]
})
