// import { withInstall } from '../utils';
import _NoticeBar, { NoticeBarProps } from './NoticeBar';

export const NoticeBar = _NoticeBar;
export default NoticeBar;
export type { NoticeBarProps };
export type { NoticeBarMode, NoticeBarInstance } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvNoticeBar: typeof NoticeBar;
  }
}
