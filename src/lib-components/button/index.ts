// @ts-ignore
import _Button from './Button';

export const Button = _Button;
export default Button;
// @ts-ignore
export type { ButtonProps } from './Button';
export type { ButtonType, ButtonSize, ButtonNativeType, ButtonIconPosition } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanButton: typeof Button;
  }
}
