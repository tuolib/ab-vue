// import { withInstall } from '../utils';
import _Uploader, { UploaderProps } from './Uploader';

export const Uploader = _Uploader;
export default Uploader;
export type { UploaderProps };
export type { UploaderInstance, UploaderResultType, UploaderFileListItem } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvUploader: typeof Uploader;
  }
}
