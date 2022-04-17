// import { withInstall } from '../utils';
import _TimePicker, { TimePickerProps } from './TimePicker';

export const TimePicker = _TimePicker;
export default TimePicker;
export type { TimePickerProps };
export type { TimePickerColumnType } from './TimePicker';

declare module 'vue' {
  export interface GlobalComponents {
    AbvTimePicker: typeof TimePicker;
  }
}
