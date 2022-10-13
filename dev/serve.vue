<script lang="ts">
import { defineComponent, ref } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { AbVue3Sample } from '@/entry.esm';
// import LoadingDemo from './demo/LoadingDemo.vue';
// import LoadingDemo from '../src/lib-components/loading/demo/index.vue';
// import '../src/lib-components/loading/style/index';
// import LinkQuick from '../src/lib-components/link-quick/index';
// import ToastDemo from '../src/lib-components/toast/demo/index.vue';
// import '../src/lib-components/toast/style/index';
// import PopupDemo from '../src/lib-components/popup/demo/index.vue';
// import '../src/lib-components/popup/style/index';
// import DialogDemo from '../src/lib-components/dialog/demo/index.vue';
// import '../src/lib-components/dialog/style/index';
// import SwipeDemo from '../src/lib-components/swipe/demo/index.vue';
// import NoticeDemo from '../src/lib-components/notice-bar/demo/index.vue';
// import TabDemo from '../src/lib-components/tab/demo/index.vue';
// import StickyDemo from '../src/lib-components/sticky/demo/index.vue';
// import ActionBarButtonDemo from '../src/lib-components/action-bar-button/demo/index.vue';
// import ActionBarDemo from '../src/lib-components/action-bar/demo/index.vue';
// import SwitchDemo from '../src/lib-components/switch/demo/index.vue';
// import SkeletonDemo from '../src/lib-components/skeleton/demo/index.vue';
// import PullRefreshDemo from '../src/lib-components/pull-refresh/demo/index.vue';
// import NavBarDemo from '../src/lib-components/nav-bar/demo/index.vue';
// import TabbarDemo from '../src/lib-components/tabbar/demo/index.vue';
// import ImagePreviewDemo from '../src/lib-components/image-preview/demo/index.vue';
import CalendarDemo from '../src/lib-components/calendar/demo/index.vue';
export default defineComponent({
  name: 'ServeDev',
  components: {
    // AbVue3Sample,
    // LoadingDemo,
    // LoadingDemo,
    // LinkQuick,
    // ToastDemo,
    // PopupDemo,
    // DialogDemo,
    // SwipeDemo,
    // NoticeDemo,
    // TabDemo,
    // ActionBarButtonDemo,
    // StickyDemo,
    // ActionBarDemo,
    // SwitchDemo,
    // SkeletonDemo,
    // PullRefreshDemo,
    // NavBarDemo,
    // TabbarDemo,
    // ImagePreviewDemo,
    CalendarDemo,
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
    <div v-if="showDemo === ''"></div>
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
