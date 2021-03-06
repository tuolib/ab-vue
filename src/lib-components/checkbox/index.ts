// import { withInstall } from '../utils';
import _Checkbox from './Checkbox';

export const Checkbox = _Checkbox;
export default Checkbox;
export type { CheckboxProps } from './Checkbox';
export type { CheckboxShape, CheckboxInstance, CheckboxLabelPosition } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvCheckbox: typeof Checkbox;
  }
}
