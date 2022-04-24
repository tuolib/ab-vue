import { App, Plugin } from 'vue';

// Import vue components
import * as components from '@/lib-components/index';

// install function executed by Vue.use()
const install: Exclude<Plugin['install'], undefined> = function installAbVue3(app: App) {
  Object.entries(components).forEach(([componentName, component]) => {
    // if (componentName === 'image-preview' || componentName === 'calendar') {
    //   console.log(componentName);
    // } else {
    // }
    // eslint-disable-line
    // eslint-disable-next-line
    // @ts-ignore
    app.component(componentName, component);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
