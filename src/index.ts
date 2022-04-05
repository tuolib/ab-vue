import { App } from 'vue';

import './main.css'; // 引入样式
import TestBricks from './components/testBricks';
import Button from './components/button';
import Tip from './components/tip';
import Tag from './components/tag';

const components = [TestBricks, Button, Tip, Tag];

// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

// 局部注册
export { TestBricks, Button, Tip, Tag, install };
export default {
  install,
};
