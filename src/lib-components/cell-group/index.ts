// import { withInstall } from '../utils';
import _CellGroup from './CellGroup';

export const CellGroup = _CellGroup;
export default CellGroup;
export type { CellGroupProps } from './CellGroup';

declare module 'vue' {
  export interface GlobalComponents {
    AbvCellGroup: typeof CellGroup;
  }
}
