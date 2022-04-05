import Tag from './Tag.vue';
import {App} from "vue";
export type { TagType } from './types';
Tag.install = (app: App) => {
  app.component(Tag.name, Tag)
}

export default Tag
