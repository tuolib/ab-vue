// import { withInstall } from '../utils';
import _List, { ListProps } from './List';

export const List = _List;
export default List;
export type { ListProps };
export type { ListInstance, ListDirection } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvList: typeof List;
  }
}
