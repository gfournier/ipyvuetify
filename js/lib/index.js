import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import './styles.less';

Vue.use(BootstrapVue);

export { VuetifyView } from './VuetifyView';
export * from './generated';

export const { version } = require('../package.json'); // eslint-disable-line global-require
