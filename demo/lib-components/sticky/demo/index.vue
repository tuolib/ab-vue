<script setup lang="ts">
import AbvSticky from '..';
import AbvButton from '../../button';
import { ref } from 'vue';
import { useTranslate } from '../../utils/use-translate';

const t = useTranslate({
  'zh-CN': {
    offsetTop: '吸顶距离',
    offsetBottom: '吸底距离',
    setContainer: '指定容器',
  },
  'en-US': {
    offsetTop: 'Offset Top',
    offsetBottom: 'Offset Bottom',
    setContainer: 'Set Container',
  },
});

const container = ref<Element>();
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <abv-sticky>
      <abv-button type="primary" style="margin-left: 15px">
        {{ t('basicUsage') }}
      </abv-button>
    </abv-sticky>
  </demo-block>

  <demo-block :title="t('offsetTop')">
    <abv-sticky :offset-top="50">
      <abv-button type="primary" style="margin-left: 115px">
        {{ t('offsetTop') }}
      </abv-button>
    </abv-sticky>
  </demo-block>

  <demo-block :title="t('setContainer')">
    <div ref="container" style="height: 150px; background-color: var(--abv-background-2)">
      <abv-sticky :container="container">
        <abv-button type="warning" style="margin-left: 215px">
          {{ t('setContainer') }}
        </abv-button>
      </abv-sticky>
    </div>
  </demo-block>

  <demo-block :title="t('offsetBottom')">
    <div style="height: 200px"></div>
    <abv-sticky :offset-bottom="50" position="bottom">
      <abv-button type="primary" style="margin-left: 15px">
        {{ t('offsetBottom') }}
      </abv-button>
    </abv-sticky>
  </demo-block>
</template>

<style lang="less">
.demo-sticky {
  height: 200vh;

  .abv-button {
    margin-left: var(--abv-padding-md);
  }
}
</style>
