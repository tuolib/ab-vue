// import { withInstall } from '../utils';
import _Tabs, { TabsProps } from './Tabs';

export const Tabs = _Tabs;
export default Tabs;
export type { TabsProps };
export type { TabsType, TabsInstance } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvTabs: typeof Tabs;
  }
}
