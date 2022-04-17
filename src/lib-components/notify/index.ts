import { Notify } from './function-call';

export default Notify;
export { Notify };
export type { NotifyProps } from './Notify';
export type { NotifyType, NotifyOptions } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    AbvNotify: typeof Notify.Component;
  }
}
