import Tip from "./Tip.vue"
import {App} from "vue";
export type {
  TipType,
} from './types';

Tip.install = (app: App) => {
  app.component(Tip.name, Tip)
}

export default Tip
