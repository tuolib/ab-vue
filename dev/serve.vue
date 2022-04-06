<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { AbVue3Sample } from '@/entry.esm';
// import LoadingDemo from './demo/LoadingDemo.vue';
import LoadingDemo from '../src/lib-components/loading/demo/index.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    // AbVue3Sample,
    // LoadingDemo,
    LoadingDemo
  },
});
</script>

<template>
  <div id="app">
    <LoadingDemo />
  </div>
</template>
<style lang="less">
@import "../src/lib-components/style/base.less";
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
