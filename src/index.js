import SgInput from './components/input';
import SgTree from './components/tree';
import SgAvatar from './components/avatar';
import SgBadge from './components/badge';
import SgRate from './components/rate';
import SgSignet from './components/signet';
import SgIcon from './components/icon'
import SgQrcode from './components/qrcode'
import SgForm from './components/form'
import {SgSelect, Option, OptionGroup} from './components/select';
import SgCollapse from './components/collapse';
import SgButton from './components/button';
import SgCheckbox from './components/checkbox';
import SgRadio from './components/radio';

const components = {
  SgInput,
  SgTree,
  SgAvatar,
  SgBadge,
  SgRate,
  SgSignet,
  SgIcon,
  SgQrcode,
  SgForm,
  SgFormItem: SgForm.Item,
  Option: Option,
  OptionGroup,
  SgSelect,
  SgCollapse,
  SgPanel: SgCollapse.Panel,
  SgButton,
  SgButtonGroup: SgButton.Group,
  SgCheckbox,
  SgCheckboxGroup: SgCheckbox.Group,
  SgRadio,
  SgRadioGroup: SgRadio.Group,
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
