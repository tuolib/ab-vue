// import { withInstall } from '../utils';
import _SidebarItem from './SidebarItem';

export const SidebarItem = _SidebarItem;
export default SidebarItem;
export type { SidebarItemProps } from './SidebarItem';

declare module 'vue' {
  export interface GlobalComponents {
    AbvSidebarItem: typeof SidebarItem;
  }
}
