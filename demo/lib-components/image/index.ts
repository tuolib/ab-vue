// import { withInstall } from '../utils';
import _Image from './Image';

export const Image = _Image;
export default Image;
export type { ImageFit, ImageProps } from './Image';

declare module 'vue' {
  export interface GlobalComponents {
    AbvImage: typeof Image;
  }
}
