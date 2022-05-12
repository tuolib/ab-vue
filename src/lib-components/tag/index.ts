// import { withInstall } from '../utils';
import _Tag from './Tag';

export const Tag = _Tag;
export default Tag;
export type { TagSize, TagType, TagProps } from './Tag';

declare module 'vue' {
  export interface GlobalComponents {
    AbvTag: typeof Tag;
  }
}
