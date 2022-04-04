import { Button } from "../index"
export default Button;
export type {
  ButtonType,
  ButtonSize,
  ButtonNativeType,
  ButtonIconPosition,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbButton: typeof Button;
  }
}
