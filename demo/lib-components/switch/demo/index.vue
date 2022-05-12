<script setup lang="ts">
import AbvSwitch from '..';
import AbvCell from '../../cell';
import { ref } from 'vue';
import { useTranslate } from '../../utils/use-translate';
import { Dialog } from '../../dialog';
import '../../cell/style';
import '../../dialog/style';
import '../style';

const t = useTranslate({
  'zh-CN': {
    title: '标题',
    confirm: '提醒',
    message: '是否切换开关？',
    withCell: '搭配单元格使用',
    customSize: '自定义大小',
    customColor: '自定义颜色',
    asyncControl: '异步控制',
  },
  'en-US': {
    title: 'Title',
    confirm: 'Confirm',
    message: 'Are you sure to toggle switch?',
    withCell: 'Inside a Cell',
    customSize: 'Custom Size',
    customColor: 'Custom Color',
    asyncControl: 'Async Control',
  },
});

const checked = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
const checked4 = ref(true);
const checked5 = ref(true);

// eslint-disable-next-line @typescript-eslint/no-shadow
const onUpdateValue = (checked: boolean) => {
  Dialog.confirm({
    title: t('title'),
    message: t('message'),
  }).then(() => {
    checked4.value = checked;
  });
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <abv-switch v-model="checked" />
  </demo-block>

  <demo-block :title="t('disabled')">
    <abv-switch v-model="checked" disabled />
  </demo-block>

  <demo-block :title="t('loadingStatus')">
    <abv-switch v-model="checked" loading />
  </demo-block>

  <demo-block :title="t('customSize')">
    <abv-switch v-model="checked2" size="22px" />
  </demo-block>

  <demo-block :title="t('customColor')">
    <abv-switch v-model="checked3" active-color="#ee0a24" inactive-color="#dcdee0" />
  </demo-block>

  <demo-block :title="t('asyncControl')">
    <abv-switch :model-value="checked4" @update:model-value="onUpdateValue" />
  </demo-block>

  <demo-block :title="t('withCell')">
    <abv-cell center :title="t('title')">
      <template #right-icon>
        <abv-switch v-model="checked5" />
      </template>
    </abv-cell>
  </demo-block>
</template>

<style lang="less">
.demo-switch {
  .abv-switch {
    margin-left: var(--abv-padding-md);
  }
}
</style>
