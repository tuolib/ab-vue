// import { withInstall } from '../utils';
import _Step from './Step';

export const Step = _Step;
export default Step;

declare module 'vue' {
  export interface GlobalComponents {
    AbvStep: typeof Step;
  }
}
