import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import sgui from '../src/index';
// import uiscript from '../src/script/uiScript'
// 开启debug模式
// Vue.config.debug = true;
//
import uiScript from '../src/script/uiScript'
Vue.use(VueRouter);
Vue.use(sgui)
// 路由配置
const router = new VueRouter({
  esModule: false,
  routes: [
    {
      path: '/',
      component: (resolve) => require(['./index.vue'], resolve),
      redirect:'/test',
      children: [
        {
          path: 'test',
          component: (resolve) => require(['./routers/test.vue'], resolve)
        },
        {
          path: 'input',
          component: (resolve) => require(['./routers/input.vue'], resolve)
        },
        {
          path: 'tree',
          component: (resolve) => require(['./routers/tree.vue'], resolve)
        },
        {
          path: 'avatar',
          component: (resolve) => require(['./routers/avatar.vue'], resolve)
        },
        {
          path: 'signet',
          component: (resolve) => require(['./routers/signet.vue'], resolve)
        },
        {
          path: 'badge',
          component: (resolve) => require(['./routers/badge.vue'], resolve)
        },
        {
          path: 'rate',
          component: (resolve) => require(['./routers/rate.vue'], resolve)
        },
        {
            path: 'qrcode',
            component: (resolve) => require(['./routers/qrcode.vue'], resolve)
        },
        {
            path: 'magnifyGlass',
            component: (resolve) => require(['./routers/magnifyGlass.vue'], resolve)
        },
        {
            path: 'formatDate',
            component: (resolve) => require(['./routers/formatDate.vue'], resolve)
        },
        {
            path: 'numFormat',
            component: (resolve) => require(['./routers/numFormat.vue'], resolve)
        },
        {
            path: 'parseQueryString',
            component: (resolve) => require(['./routers/parseQueryString.vue'], resolve)
        },
        {
            path: 'trim',
            component: (resolve) => require(['./routers/trim.vue'], resolve)
        },
        {
            path: 'getBase64',
            component: (resolve) => require(['./routers/getBase64.vue'], resolve)
        },
        {
          path: 'business',
          component: (resolve) => require(['./routers/business.vue'], resolve)
        },
        {
          path: 'configForm',
          component: (resolve) => require(['./routers/configForm.vue'], resolve)
        }
      ],
    },
  ]
});
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
