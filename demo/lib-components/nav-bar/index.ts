// import { withInstall } from '../utils';
import _NavBar from './NavBar';

export const NavBar = _NavBar;
export default NavBar;
export type { NavBarProps } from './NavBar';

declare module 'vue' {
  export interface GlobalComponents {
    AbvNavBar: typeof NavBar;
  }
}
