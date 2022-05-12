// import { withInstall } from '../utils';
import _GridItem from './GridItem';

export const GridItem = _GridItem;
export default GridItem;
export type { GridItemProps } from './GridItem';

declare module 'vue' {
  export interface GlobalComponents {
    AbvGridItem: typeof GridItem;
  }
}
