<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
// import Link from './function-call';
import { listen } from './all';
// import requestIdleCallback from "./request-idle-callback";
export default defineComponent({
  name: 'LinkQuick',

  props: {
    options: {
      type: Object,
      default: () => {
        return {
          // timeout: 2e3,
          // priority: false,
          // timeoutFn: requestIdleCallback,
        };
      },
    },
  },
  setup(props) {
    const linkContent = ref(null);
    onMounted(() => {
      console.log(props.options);
      let options = {
        ...props.options,
      };
      if (linkContent.value) {
        options.el = linkContent.value;
      }
      console.log(options);
      listen(options);
    });

    return {
      linkContent,
    };
  },
});
</script>
<template>
  <div ref="linkContent">
    <slot></slot>
  </div>
</template>
