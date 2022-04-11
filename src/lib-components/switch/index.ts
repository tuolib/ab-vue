// import { withInstall } from '../utils';
import _Switch from './Switch';

export const Switch = _Switch;
export default Switch;
export type { SwitchProps } from './Switch';

declare module 'vue' {
  export interface GlobalComponents {
    AbvSwitch: typeof Switch;
  }
}
