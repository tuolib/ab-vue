// import { withInstall } from '../utils';
import _Tab from './Tab';

export const Tab = _Tab;
export default Tab;
export type { TabProps } from './Tab';

declare module 'vue' {
  export interface GlobalComponents {
    AbvTab: typeof Tab;
  }
}
