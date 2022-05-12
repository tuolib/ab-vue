import { App } from 'vue';
import { camelize } from './format';

// https://github.com/youzan/vant/issues/8302
type EventShim = {
  new (...args: any[]): {
    $props: {
      // @ts-ignore
      onClick?: (...argss: any[]) => void;
    };
  };
};

export type WithInstall<T> = T & {
  install(app: App): void;
} & EventShim;

export function withInstall<T>(options: T) {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options as unknown as { name: string };
    app.component(name, options);
    app.component(camelize(`-${name}`), options);
  };

  return options as WithInstall<T>;
}
