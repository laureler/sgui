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
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      component: (resolve) => require(['./index.vue'], resolve),
      redirect: '/test',
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
          path: 'tab',
          component: (resolve) => require(['./routers/tab.vue'], resolve)
        },
        {
          path: 'tabs',
          component: (resolve) => require(['./routers/tabs.vue'], resolve)
        },
        {
          path: 'page',
          component: (resolve) => require(['./routers/page.vue'], resolve)
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
        },
        {
          path: 'queryTable',
          component: (resolve) => require(['./routers/queryTable.vue'], resolve)
        },
        {
          path: 'preview',
          component: (resolve) => require(['./routers/preview.vue'], resolve)
        },
        {
          path: 'pdfPreview',
          component: (resolve) => require(['./routers/pdfPreview.vue'], resolve)
        },
        {
          path: 'button',
          component: (resolve) => require(['./routers/button.vue'], resolve)
        },
        {
          path: 'radio',
          component: (resolve) => require(['./routers/radio.vue'], resolve)
        },
        {
          path: 'checkbox',
          component: (resolve) => require(['./routers/checkbox.vue'], resolve)
        },
        {
          path: 'select',
          component: (resolve) => require(['./routers/select.vue'], resolve)
        },
        {
          path: 'form',
          component: (resolve) => require(['./routers/form.vue'], resolve)
        },
        {
          path: 'icon',
          component: (resolve) => require(['./routers/icon.vue'], resolve)
        },
        {
          path: 'uiscript',
          component: (resolve) => require(['./routers/uiscript.vue'], resolve)
        },
        {
          path: 'table',
          component: (resolve) => require(['./routers/table.vue'], resolve)
        },
        {
          path: 'collapse',
          component: (resolve) => require(['./routers/collapse.vue'], resolve)
        },
        {
          path: 'inputNumber',
          component: (resolve) => require(['./routers/inputNumber.vue'], resolve)
        },
        {
          path: 'slider',
          component: (resolve) => require(['./routers/slider.vue'], resolve)
        },
        {
          path: 'processBar',
          component: (resolve) => require(['./routers/processBar.vue'], resolve)
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
