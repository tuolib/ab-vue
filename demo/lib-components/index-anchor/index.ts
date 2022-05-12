// import { withInstall } from '../utils';
import _IndexAnchor from './IndexAnchor';

export const IndexAnchor = _IndexAnchor;
export default IndexAnchor;
export type { IndexAnchorProps } from './IndexAnchor';

declare module 'vue' {
  export interface GlobalComponents {
    AbvIndexAnchor: typeof IndexAnchor;
  }
}
