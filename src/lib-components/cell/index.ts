import _Cell from './Cell';

const Cell = _Cell;
export default _Cell;
export { Cell };
export type { CellSize, CellProps, CellArrowDirection } from './Cell';

declare module 'vue' {
  export interface GlobalComponents {
    AbvCell: typeof _Cell;
  }
}
