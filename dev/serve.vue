<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { AbVue3Sample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  AbVue3Sample,
  // }
});
</script>

<template>
  <div id="app">
    <ab-vue3-sample />
  </div>
</template>
