import SgInput from './components/input';
import SgTree from './components/tree';
import SgAvatar from './components/avatar';
import SgBadge from './components/badge';
import SgRate from './components/rate';
import SgSignet from './components/signet';
import SgIcon from './components/icon'
import SgQrcode from './components/qrcode'
import SgTabs from './components/tabs';
import SgPane from './components/pane';
import SgForm from './components/form'
import {SgSelect, Option, OptionGroup} from './components/select';
import SgCollapse from './components/collapse';
import SgButton from './components/button';
import SgCheckbox from './components/checkbox';
import SgRadio from './components/radio';
import {ElTable,ElTableColumn} from './components/table'
import SgSpin from './components/spin';
import SgModal from './components/modal';
import SgPreview from './components/preview';
import SgPdf from './components/pdfPreview';
import {Row, Col} from './components/grid';
import Icon from './components/icon';


const components = {
  SgInput,
  SgTree,
  SgAvatar,
  SgBadge,
  SgRate,
  SgSignet,
  SgIcon,
  SgQrcode,
  SgTabs,
  SgPane,
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
  SgSpin,
  SgModal,
  SgPreview,
  SgPdf,
  Row,
  Col,
  Icon,
  SgTable:ElTable,
  SgTableColumn:ElTableColumn
};

const sgui = {
  ...components
};

const install = function(Vue) {
  if (install.installed) return;
  Object.keys(sgui).forEach(key => {
    Vue.component(key, sgui[key]);
  });
  Vue.prototype.$SgModal = SgModal;
  Vue.prototype.$SgSpin = SgSpin;

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '1.0.1',
  install,
  ...components
};

module.exports.default = module.exports
