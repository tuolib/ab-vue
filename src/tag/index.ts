import { Tag } from '../index';
export default Tag;
export type { TagType } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbTag: typeof Tag;
  }
}
