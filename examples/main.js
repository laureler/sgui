import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import sgui from '../src/index';
import uiscript from '../src/script/uiScript'
// 开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
console.log(uiscript)
Vue.use(sgui)
// 路由配置
const router = new VueRouter({
  esModule: false,
  routes: [
    {
      path: '/input',
      component: (resolve) => require(['./routers/input.vue'], resolve)
    }
  ]
});
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})