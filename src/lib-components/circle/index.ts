// import { withInstall } from '../utils';
import _Circle from './Circle';

export const Circle = _Circle;
export default Circle;
export type { CircleProps, CircleStartPosition } from './Circle';

declare module 'vue' {
  export interface GlobalComponents {
    AbvCircle: typeof Circle;
  }
}
