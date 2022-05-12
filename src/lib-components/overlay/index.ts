// import { withInstall } from '../utils';
import _Overlay from './Overlay';

export const Overlay = _Overlay;
export default Overlay;
export type { OverlayProps } from './Overlay';

declare module 'vue' {
  export interface GlobalComponents {
    AbvOverlay: typeof Overlay;
  }
}
