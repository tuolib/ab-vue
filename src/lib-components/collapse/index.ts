// import { withInstall } from '../utils';
import _Collapse from './Collapse';

export const Collapse = _Collapse;
export default Collapse;
export type { CollapseProps } from './Collapse';

declare module 'vue' {
  export interface GlobalComponents {
    AbvCollapse: typeof Collapse;
  }
}
