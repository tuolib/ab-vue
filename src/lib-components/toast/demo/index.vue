<script setup lang="ts">
import { useTranslate } from '../../utils/use-translate';
import { Toast } from '..';
import type { LoadingType } from '../../loading';
import Cell from '../../cell';
import '../../cell/index.less';

const t = useTranslate({
  'zh-CN': {
    fail: '失败提示',
    text: '提示内容',
    text2: '成功文案',
    text3: '失败文案',
    text4: (second: number) => `倒计时 ${second} 秒`,
    title1: '文字提示',
    title2: '加载提示',
    title3: '成功/失败提示',
    success: '成功提示',
    customIcon: '自定义图标',
    customImage: '自定义图片',
    loadingType: '自定义加载图标',
    positionTop: '顶部展示',
    updateMessage: '动态更新提示',
    positionBottom: '底部展示',
    customPosition: '自定义位置',
  },
  'en-US': {
    fail: 'Fail',
    text: 'Some messages',
    text2: 'Success',
    text3: 'Fail',
    text4: (second: number) => `${second} seconds`,
    title1: 'Text',
    title2: 'Loading',
    title3: 'Success/Fail',
    success: 'Success',
    customIcon: 'Custom Icon',
    customImage: 'Custom Image',
    loadingType: 'Loading Type',
    positionTop: 'Top',
    updateMessage: 'Update Message',
    positionBottom: 'Bottom',
    customPosition: 'Custom Position',
  },
});

const showLoadingToast = (loadingType?: LoadingType) => {
  Toast.loading({
    forbidClick: true,
    message: t('loading'),
    loadingType,
  });
};

const showSuccessToast = () => {
  Toast.success(t('text2'));
};

const showFailToast = () => {
  Toast.fail(t('text3'));
};

const showTopToast = () => {
  Toast({
    message: t('positionTop'),
    position: 'top',
  });
};

const showBottomToast = () => {
  Toast({
    message: t('positionBottom'),
    position: 'bottom',
  });
};

const showIconToast = () => {
  Toast({
    message: t('customIcon'),
    icon: 'like-o',
  });
};

const showImageToast = () => {
  Toast({
    message: t('customImage'),
    // icon: cdnURL('logo.png'),
  });
};

const showCustomizedToast = () => {
  const toast = Toast.loading({
    duration: 0,
    forbidClick: true,
    message: t('text4', 3),
  });

  let second = 3;
  const timer = setInterval(() => {
    second--;
    if (second) {
      toast.message = t('text4', second);
    } else {
      clearInterval(timer);
      Toast.clear();
    }
  }, 1000);
};
</script>

<template>
  <div card :title="t('basicUsage')">
    <Cell is-link :title="t('title1')" @click="Toast(t('text'))" />
    <Cell is-link :title="t('title2')" @click="showLoadingToast()" />
    <Cell is-link :title="t('success')" @click="showSuccessToast" />
    <Cell is-link :title="t('fail')" @click="showFailToast" />
  </div>

  <div card :title="t('customIcon')">
    <Cell is-link :title="t('customIcon')" @click="showIconToast" />
    <Cell is-link :title="t('customImage')" @click="showImageToast" />
    <Cell is-link :title="t('loadingType')" @click="showLoadingToast('spinner')" />
  </div>

  <div card :title="t('customPosition')">
    <Cell is-link :title="t('positionTop')" @click="showTopToast" />
    <Cell is-link :title="t('positionBottom')" @click="showBottomToast" />
  </div>

  <div card :title="t('updateMessage')">
    <Cell is-link :title="t('updateMessage')" @click="showCustomizedToast" />
  </div>
</template>
