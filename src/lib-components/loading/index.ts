// import { withInstall } from '../utils';
import _Loading from './Loading';

// export const Loading = withInstall(_Loading);
export const Loading = _Loading;
export default Loading;
export type { LoadingType, LoadingProps } from './Loading';

declare module 'vue' {
  export interface GlobalComponents {
    abLoading: typeof Loading;
  }
}
