import _ActionBar from './ActionBar';

export const ActionBar = _ActionBar;
export default ActionBar;
export type { ActionBarProps } from './ActionBar';

declare module 'vue' {
  export interface GlobalComponents {
    AbvActionBar: typeof ActionBar;
  }
}
