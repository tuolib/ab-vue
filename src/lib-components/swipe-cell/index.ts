// import { withInstall } from '../utils';
import _SwipeCell, { SwipeCellProps } from './SwipeCell';

export const SwipeCell = _SwipeCell;
export default SwipeCell;
export type { SwipeCellProps };
export type { SwipeCellSide, SwipeCellPosition, SwipeCellInstance } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvSwipeCell: typeof SwipeCell;
  }
}
