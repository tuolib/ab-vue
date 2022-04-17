// import { withInstall } from '../utils';
import _Stepper from './Stepper';

export const Stepper = _Stepper;
export default Stepper;
export type { StepperTheme, StepperProps } from './Stepper';

declare module 'vue' {
  export interface GlobalComponents {
    AbvStepper: typeof Stepper;
  }
}
