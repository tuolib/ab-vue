<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { AbVue3Sample } from '@/entry.esm';
// import LoadingDemo from './demo/LoadingDemo.vue';
import '../src/lib-components/style/base.less';
import '../src/lib-components/loading/index.less';
import '../src/lib-components/overlay/index.less';
import '../src/lib-components/popup/index.less';
import '../src/lib-components/cell/index.less';
import '../src/lib-components/toast/index.less';
import LoadingDemo from '../src/lib-components/loading/demo/index.vue';
import LinkQuick from '../src/lib-components/link-quick/index';
import ToastDemo from '../src/lib-components/toast/demo/index.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    // AbVue3Sample,
    // LoadingDemo,
    LoadingDemo,
    LinkQuick,
    ToastDemo,
  },
});
</script>

<template>
  <div id="app">
    <LoadingDemo />
    <LinkQuick :options="{ origins: [] }">
      <a href="https://dockergene.com">123</a>
    </LinkQuick>
    <ToastDemo />
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
</style>
