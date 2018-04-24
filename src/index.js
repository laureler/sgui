import SgInput from './components/input';
import SgTree from './components/tree';

const components = {
  SgInput,
  SgTree
};

const sgui = {
  ...components
};

const install = function(Vue, opts = {}) {
  if (install.installed) return;

  Object.keys(sgui).forEach(key => {
    Vue.component(key, sgui[key]);
  });

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  install,
  ...components
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
