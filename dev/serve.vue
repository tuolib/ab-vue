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
import StickyDemo from '../src/lib-components/sticky/demo/index.vue';
// import ActionBarButtonDemo from '../src/lib-components/action-bar-button/demo/index.vue';
import ActionBarDemo from '../src/lib-components/action-bar/demo/index.vue';
import SwitchDemo from '../src/lib-components/switch/demo/index.vue';
import SkeletonDemo from '../src/lib-components/skeleton/demo/index.vue';
import PullRefreshDemo from '../src/lib-components/pull-refresh/demo/index.vue';
import NavBarDemo from '../src/lib-components/nav-bar/demo/index.vue';
import TabbarDemo from '../src/lib-components/tabbar/demo/index.vue';

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
    // ActionBarButtonDemo,
    StickyDemo,
    ActionBarDemo,
    SwitchDemo,
    SkeletonDemo,
    PullRefreshDemo,
    NavBarDemo,
    TabbarDemo,
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
    <div v-if="showDemo === ''">
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
      <div class="blockDemo">
        <Cell title="StickyDemo 例子：" @click="setShow('StickyDemo')" />
      </div>
      <!--    <div class="blockDemo">-->
      <!--      <Cell title="ActionBarDemo 例子：" @click="setShow('ActionBarDemo')" />-->
      <!--    </div>-->
      <div class="blockDemo">
        <Cell title="SwitchDemo 例子：" @click="setShow('SwitchDemo')" />
      </div>
      <div class="blockDemo">
        <Cell title="SkeletonDemo 例子：" @click="setShow('SkeletonDemo')" />
      </div>
      <div class="blockDemo">
        <Cell title="PullRefreshDemo 例子：" @click="setShow('PullRefreshDemo')" />
      </div>
      <div class="blockDemo">
        <Cell title="NavBarDemo 例子：" @click="setShow('NavBarDemo')" />
      </div>
      <div class="blockDemo">
        <Cell title="TabbarDemo 例子：" @click="setShow('TabbarDemo')" />
      </div>
    </div>
    <div v-else class="showContent">
      <div @click="setShow('')">返回</div>
      <component :is="showDemo" />
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
.showContent {
  background: #ffffff;
}
</style>
