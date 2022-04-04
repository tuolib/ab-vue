<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',

  props: {},

  emits: ['click'],

  setup(props, { emit, slots }) {},
});
</script>
<template>
  <div>button</div>
</template>
