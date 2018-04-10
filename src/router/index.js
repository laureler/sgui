import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Input from '@/views/basemodule/input'
import imgToBase64 from '@/views/basemodule/imgToBase64'
import formatDate from '@/views/basemodule/formatDate'
import numFormat from '@/views/basemodule/numFormat'

import Tree from '@/views/basemodule/tree'
import url from '@/views/basemodule/url'
import trim from '@/views/basemodule/trim'
import qrcode from '@/views/basemodule/qrcode'

import multiLine from '@/views/basemodule/multiLine'
import glass from '@/views/basemodule/glass'
import uiradio from '@/views/basemodule/uiRadio'
import checkbox  from '@/views/basemodule/checkbox'
import numIncrease from '@/views/basemodule/numIncrease'
import select from '@/views/basemodule/select'
import sliderbar from '@/views/basemodule/sliderbar'
import shuttleBox from '@/views/basemodule/shuttleBox'

import navigation from '@/views/basemodule/navigation'
import tab from '@/views/basemodule/tab'


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
    },
    {
      path: '/basemodule/numFormat',
      name: 'numFormat',
      component: numFormat
    },

     {
      path: '/basemodule/tree',
      name: 'Tree',
      component: Tree
    },
     {
      path: '/basemodule/url',
      name: 'url',
      component: url
    },
     {
      path: '/basemodule/trim',
      name: 'trim',
      component: trim
    },
     {
      path: '/basemodule/qrcode',
      name: 'qrcode',
      component: qrcode
    },
    {
      path: '/basemodule/multiLine',
      name: 'multiLine',
      component: multiLine
    },
    {
      path: '/basemodule/glass',
      name: 'glass',
      component: glass
    },
    {
      path: '/basemodule/navigation',
      name: 'navigation',
      component: navigation
    },
    {
      path: '/basemodule/tab',
      name: 'tab',
      component: tab
    },
	  {
      path: '/basemodule/uiRadio',
      name: 'uiRadio',
      component: uiradio
    },
    {
      path: '/basemodule/checkbox',
      name: 'checkbox',
      component: checkbox
    },
    {
      path: '/basemodule/numIncrease',
      name: 'numIncrease',
      component: numIncrease
    },
    {
      path: '/basemodule/select',
      name: 'select',
      component: select
    },
    {
      path: '/basemodule/sliderbar',
      name: 'sliderbar',
      component: sliderbar
    },
    {
      path: '/basemodule/shuttleBox',
      name: 'shuttleBox',
      component: shuttleBox
    },
  ]
})
