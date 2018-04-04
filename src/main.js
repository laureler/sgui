// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import uiScript from './script/uiScript.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
import axios from 'axios'
import VueAxios from 'vue-axios'
import {post,fetch,patch,put} from '../static/scripts/http'
Vue.use(VueAxios, axios)
// Vue.prototype.$uiScript=uiScript
Vue.config.productionTip = false
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
