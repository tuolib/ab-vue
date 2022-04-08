import _Popup from './Popup';

export const Popup = _Popup;
export default Popup;
export type { PopupProps } from './Popup';
export type { PopupPosition, PopupInstance, PopupCloseIconPosition } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvPopup: typeof Popup;
  }
}
