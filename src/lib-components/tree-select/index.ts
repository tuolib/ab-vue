// import { withInstall } from '../utils';
import _TreeSelect from './TreeSelect';

export const TreeSelect = _TreeSelect;
export default TreeSelect;
export type { TreeSelectItem, TreeSelectChild, TreeSelectProps } from './TreeSelect';

declare module 'vue' {
  export interface GlobalComponents {
    AbvTreeSelect: typeof TreeSelect;
  }
}
