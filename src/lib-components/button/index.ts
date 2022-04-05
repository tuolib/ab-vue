import Button from "./Button.vue"
import { App } from "vue";
// export type {
//   ButtonType,
//   ButtonSize,
//   ButtonNativeType,
//   ButtonIconPosition,
// } from './types';

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button;
