<template>
  <div class="demo-loading">
    <Loading></Loading>
    <Loading color="#1989fa" />
    <Loading type="spinner" color="#1989fa" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LoadingDemo',
});
</script>

<style lang="less">
@import "../../src/lib-components/loading/index.less";

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
