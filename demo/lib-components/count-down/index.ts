// import { withInstall } from '../utils';
import _CountDown from './CountDown';

export const CountDown = _CountDown;
export default CountDown;
export type { CountDownProps } from './CountDown';
export type { CountDownInstance, CountDownCurrentTime } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvCountDown: typeof CountDown;
  }
}
