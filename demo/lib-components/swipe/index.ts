// import { withInstall } from '../utils';
import _Swipe, { SwipeProps } from './Swipe';

export const Swipe = _Swipe;
export default Swipe;
export type { SwipeProps };
export type { SwipeInstance, SwipeToOptions } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvSwipe: typeof Swipe;
  }
}
