import { withInstall } from '../utils/with-install';
import _Calendar from './Calendar';

export const Calendar = withInstall(_Calendar);
export default Calendar;
export type { CalendarProps } from './Calendar';
export type { CalendarType, CalendarDayItem, CalendarDayType, CalendarInstance } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvCalendar: typeof Calendar;
  }
}
