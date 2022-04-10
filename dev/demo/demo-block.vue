<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DemoBlock',
  props: {
    title: String,
  },
  setup() {},
});
</script>

<template>
  <div>
    <div>{{ title }}</div>
    <slot></slot>
  </div>
</template>
<style lang="less"></style>
