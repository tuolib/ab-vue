<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { AbVue3Sample } from '@/entry.esm';
// import LoadingDemo from './demo/LoadingDemo.vue';

import LoadingDemo from '../src/lib-components/loading/demo/index.vue';
import '../src/lib-components/loading/style/index';

import LinkQuick from '../src/lib-components/link-quick/index';

import PopupDemo from '../src/lib-components/popup/demo/index.vue';
import '../src/lib-components/popup/style/index';

import ToastDemo from '../src/lib-components/toast/demo/index.vue';
import '../src/lib-components/toast/style/index';

import DialogDemo from '../src/lib-components/dialog/demo/index.vue';
import '../src/lib-components/dialog/style/index';

export default defineComponent({
  name: 'ServeDev',
  components: {
    // AbVue3Sample,
    // LoadingDemo,
    LoadingDemo,
    LinkQuick,
    ToastDemo,
    PopupDemo,
    DialogDemo,
  },
});
</script>

<template>
  <div id="app">
    <LoadingDemo />
    <LinkQuick :options="{ origins: [] }">
      <a href="https://dockergene.com">123</a>
    </LinkQuick>
    <div class="blockDemo">
      <div class="demoTitle">toast 例子：</div>
      <ToastDemo />
    </div>
    <div class="blockDemo">
      <div class="demoTitle">Popup 例子：</div>
      <PopupDemo />
    </div>
    <div class="blockDemo">
      <div class="demoTitle">dialog 例子：</div>
      <DialogDemo />
    </div>
  </div>
</template>
<style lang="less">
@import '../src/lib-components/style/base.less';

body {
  background: #eff2f5;
}

.line {
  height: 1px;
  background: red;
}

.demo-loading {
  .ab-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
.blockDemo {
  margin: 30px 0;
  padding: 0 10px;
  .demoTitle {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
