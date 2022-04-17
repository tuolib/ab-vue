// import { withInstall } from '../utils';
import _Progress, { ProgressProps } from './Progress';

export const Progress = _Progress;
export default Progress;
export type { ProgressProps };
export type { ProgressInstance } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvProgress: typeof Progress;
  }
}
