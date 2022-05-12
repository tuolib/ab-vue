<script setup lang="ts">
import AbvSkeleton from '..';
import AbvSwitch from '../../switch';
import { ref } from 'vue';
import { useTranslate } from '../../utils/use-translate';
import '../style';

const t = useTranslate({
  'zh-CN': {
    showAvatar: '显示头像',
    showChildren: '显示子组件',
    title: '关于 Vant',
    desc: 'Vant 是一套轻量、可靠的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。',
  },
  'en-US': {
    showAvatar: 'Show Avatar',
    showChildren: 'Show Children',
    title: 'About Vant',
    desc: 'Vant is a set of Mobile UI Components built on Vue.',
  },
});

const show = ref(false);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <abv-skeleton title :row="3" />
  </demo-block>

  <demo-block :title="t('showAvatar')">
    <abv-skeleton title avatar :row="3" />
  </demo-block>

  <demo-block :title="t('showChildren')">
    <abv-switch v-model="show" />
    <abv-skeleton title avatar :row="3" :loading="!show">
      <div class="demo-preview">
        <div class="demo-content">
          <h3>{{ t('title') }}</h3>
          <p>{{ t('desc') }}</p>
        </div>
      </div>
    </abv-skeleton>
  </demo-block>
</template>

<style lang="less">
.demo-skeleton {
  background-color: var(--abv-background-2);

  .abv-switch {
    margin: 0 var(--abv-padding-md) var(--abv-padding-xs);
  }

  .demo-preview {
    display: flex;
    padding: 0 var(--abv-padding-md);

    .demo-content {
      padding-top: 6px;

      h3 {
        margin: 0;
        font-size: 18px;
        line-height: 20px;
      }

      p {
        margin: 13px 0 0;
        font-size: 14px;
        line-height: 20px;
      }
    }

    img {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: var(--abv-padding-md);
    }
  }
}
</style>
