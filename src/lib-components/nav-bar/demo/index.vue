<script setup lang="ts">
import AbvNavBar from '..';
// import VanIcon from '../../icon';
import { useTranslate } from '../../utils/use-translate';
import { Toast } from '../../toast';
import '../../toast';
import '../style';

const t = useTranslate({
  'zh-CN': {
    useSlot: '使用插槽',
    showBack: '返回上级',
    rightButton: '右侧按钮',
  },
  'en-US': {
    useSlot: 'Use Slot',
    showBack: 'Back',
    rightButton: 'Right Button',
  },
});

const onClickLeft = () => Toast(t('back'));
const onClickRight = () => Toast(t('button'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <abv-nav-bar :title="t('title')" />
  </demo-block>

  <demo-block :title="t('showBack')">
    <abv-nav-bar
      :title="t('title')"
      :left-text="t('back')"
      left-arrow
      @click-right="onClickRight"
    />
  </demo-block>

  <demo-block :title="t('rightButton')">
    <abv-nav-bar
      :title="t('title')"
      :left-text="t('back')"
      :right-text="t('button')"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </demo-block>

  <demo-block :title="t('useSlot')">
    <abv-nav-bar :title="t('title')" :left-text="t('back')" left-arrow>
      <template #right>
        <span>right</span>
      </template>
    </abv-nav-bar>
  </demo-block>
</template>
