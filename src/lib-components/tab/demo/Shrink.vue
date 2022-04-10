<script setup lang="ts">
import { ref } from 'vue';
import AbvTabs from '../../tabs';
import AbvTab from '..';
import { useTranslate } from '../../utils/use-translate';
import '../../tabs/style';
import '../style';

const t = useTranslate({
  'zh-CN': {
    tab: '标签 ',
    shrink: '收缩布局',
  },
  'en-US': {
    tab: 'Tab ',
    shrink: 'Shrink',
  },
});

const tabs = [1, 2, 3, 4];
const active1 = ref(0);
const active2 = ref(0);
</script>

<template>
  <div :title="t('shrink')">
    <abv-tabs v-model:active="active1" shrink>
      <abv-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
    <abv-tabs v-model:active="active2" type="card" shrink style="margin-top: var(--abv-padding-lg)">
      <abv-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </div>
</template>
