import _Cell from './Cell';

export default _Cell;
export type { CellSize, CellProps, CellArrowDirection } from './Cell';

declare module 'vue' {
  export interface GlobalComponents {
    AbvCell: typeof _Cell;
  }
}
