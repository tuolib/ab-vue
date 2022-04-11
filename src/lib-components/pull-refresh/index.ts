// import { withInstall } from '../utils';
import _PullRefresh from './PullRefresh';

export const PullRefresh = _PullRefresh;
export default PullRefresh;
export type { PullRefreshProps } from './PullRefresh';

declare module 'vue' {
  export interface GlobalComponents {
    AbvPullRefresh: typeof PullRefresh;
  }
}
