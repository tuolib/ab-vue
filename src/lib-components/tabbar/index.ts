// import { withInstall } from '../utils';
import _Tabbar from './Tabbar';

export const Tabbar = _Tabbar;
export default Tabbar;
export type { TabbarProps } from './Tabbar';

declare module 'vue' {
  export interface GlobalComponents {
    AbvTabbar: typeof Tabbar;
  }
}
