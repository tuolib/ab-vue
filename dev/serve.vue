<script lang="ts">
import { defineComponent, ref } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { AbVue3Sample } from '@/entry.esm';
// import LoadingDemo from './demo/LoadingDemo.vue';

import LoadingDemo from '../src/lib-components/loading/demo/index.vue';
// import '../src/lib-components/loading/style/index';

import LinkQuick from '../src/lib-components/link-quick/index';

import ToastDemo from '../src/lib-components/toast/demo/index.vue';
// import '../src/lib-components/toast/style/index';

import PopupDemo from '../src/lib-components/popup/demo/index.vue';
// import '../src/lib-components/popup/style/index';

import DialogDemo from '../src/lib-components/dialog/demo/index.vue';
// import '../src/lib-components/dialog/style/index';

import SwipeDemo from '../src/lib-components/swipe/demo/index.vue';
import NoticeDemo from '../src/lib-components/notice-bar/demo/index.vue';
import TabDemo from '../src/lib-components/tab/demo/index.vue';

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
    SwipeDemo,
    NoticeDemo,
    TabDemo,
  },
  setup() {
    const showDemo = ref('');
    const setShow = (val: string) => {
      showDemo.value = val;
    };
    return {
      showDemo,
      setShow,
    };
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
      <Cell title="toast 例子：" @click="setShow('ToastDemo')" />
    </div>
    <div class="blockDemo">
      <Cell title="Popup 例子：" @click="setShow('PopupDemo')" />
    </div>
    <div class="blockDemo">
      <Cell title="dialog 例子：" @click="setShow('DialogDemo')" />
    </div>
    <div class="blockDemo">
      <Cell title="SwipeDemo 例子：" @click="setShow('SwipeDemo')" />
    </div>
    <div class="blockDemo">
      <Cell title="NoticeDemo 例子：" @click="setShow('NoticeDemo')" />
    </div>
    <div class="blockDemo">
      <Cell title="TabDemo 例子：" @click="setShow('TabDemo')" />
    </div>
    <component :is="showDemo" />
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
