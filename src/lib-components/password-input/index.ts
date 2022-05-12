// import { withInstall } from '../utils';
import _PasswordInput from './PasswordInput';

export const PasswordInput = _PasswordInput;
export default PasswordInput;
export type { PasswordInputProps } from './PasswordInput';

declare module 'vue' {
  export interface GlobalComponents {
    AbvPasswordInput: typeof PasswordInput;
  }
}
