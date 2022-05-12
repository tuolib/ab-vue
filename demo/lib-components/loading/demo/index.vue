<template>
  <div class="demo-loading">
    <Loading />
    <Loading color="#1989fa" />
    <Loading type="spinner" color="#1989fa" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../style/index.js';

export default defineComponent({
  name: 'LoadingDemo',
});
</script>

<style lang="less">
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
