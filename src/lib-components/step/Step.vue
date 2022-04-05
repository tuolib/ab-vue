<script lang="ts">
import { defineComponent, ref } from 'vue';
// import './tag.css'
export default defineComponent({
  name: 'Step',

  props: {},

  emits: ['click'],

  setup() {
    const name = ref('')
    name.value = 'step11'
    return {
      name
    }
  },
});
</script>
<template>
  <div class="step">
    <div>{{ name }}</div>
    stepstepstepstepstepstepstepstepstepstepstep
  </div>
</template>
