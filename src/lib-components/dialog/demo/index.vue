<script setup lang="ts">
import Cell from '../../cell';
import { Dialog } from '..';
import { ref } from 'vue';
import { useTranslate } from '../../utils/use-translate';
import type { DialogAction } from '../types';

const VanDialog = Dialog.Component;

const t = useTranslate({
  'zh-CN': {
    title: '标题',
    alert1: '提示弹窗',
    alert2: '提示弹窗（无标题）',
    confirm: '确认弹窗',
    content1: '代码是写出来给人看的，附带能在机器上运行。',
    content2: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
    content3: '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
    beforeClose: '异步关闭',
    roundButton: '圆角按钮样式',
    componentCall: '组件调用',
  },
  'en-US': {
    title: 'Title',
    alert1: 'Alert',
    alert2: 'Alert without title',
    confirm: 'Confirm dialog',
    content1: 'Content',
    content2: 'Content',
    content3: 'Content',
    beforeClose: 'Before Close',
    roundButton: 'Round Button Style',
    componentCall: 'Component Call',
  },
});

const show = ref(false);
// const image = cdnURL('apple-3.jpeg');

const onClickAlert = () => {
  Dialog.alert({
    title: t('title'),
    message: t('content1'),
  });
};

const onClickAlert2 = () => {
  Dialog.alert({
    message: t('content2'),
  });
};

const onClickRound = () => {
  Dialog.alert({
    theme: 'round-button',
    title: t('title'),
    message: t('content1'),
  });
};

const onClickRound2 = () => {
  Dialog.alert({
    theme: 'round-button',
    message: t('content2'),
  });
};

const onClickConfirm = () => {
  Dialog.confirm({
    title: t('title'),
    message: t('content3'),
  });
};

const onClickBeforeClose = () => {
  const beforeClose = (action: DialogAction) =>
    new Promise<boolean>(resolve => {
      setTimeout(() => resolve(action === 'confirm'), 1000);
    });

  Dialog.confirm({
    title: t('title'),
    message: t('content3'),
    beforeClose,
  });
};
</script>

<template>
  <div card :title="t('basicUsage')">
    <Cell is-link :title="t('alert1')" @click="onClickAlert" />
    <Cell is-link :title="t('alert2')" @click="onClickAlert2" />
    <Cell is-link :title="t('confirm')" @click="onClickConfirm" />
  </div>

  <div card :title="t('roundButton')">
    <Cell is-link :title="t('alert1')" @click="onClickRound" />
    <Cell is-link :title="t('alert2')" @click="onClickRound2" />
  </div>

  <div card :title="t('beforeClose')">
    <Cell is-link :title="t('beforeClose')" @click="onClickBeforeClose" />
  </div>

  <div card :title="t('componentCall')">
    <Cell is-link :title="t('componentCall')" @click="show = true" />
    <van-dialog v-model:show="show" :title="t('title')" show-cancel-button :lazy-render="false">
      <!--      <img :src="image" />-->
    </van-dialog>
  </div>
</template>

<style lang="less">
.demo-dialog {
  img {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 20px 0;
  }
}
</style>
