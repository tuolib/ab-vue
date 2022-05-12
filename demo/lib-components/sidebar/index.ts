// import { withInstall } from '../utils';
import _Sidebar from './Sidebar';

export const Sidebar = _Sidebar;
export default Sidebar;
export type { SidebarProps } from './Sidebar';

declare module 'vue' {
  export interface GlobalComponents {
    VanSidebar: typeof Sidebar;
  }
}
