<script setup lang="ts">
import '../index.less';
import VanButton from '../../button';
import VanOverlay from '..';
import { ref } from 'vue';
import { useTranslate } from '../../utils/use-translate';

const t = useTranslate({
  'zh-CN': {
    showOverlay: '显示遮罩层',
    embeddedContent: '嵌入内容',
  },
  'en-US': {
    showOverlay: 'Show Overlay',
    embeddedContent: 'Embedded Content',
  },
});

const show = ref(false);
const showEmbedded = ref(false);
</script>

<template>
  <div :title="t('basicUsage')">
    <van-button
      type="primary"
      :text="t('showOverlay')"
      style="margin-left: 16px"
      @click="show = true"
    />
    <van-overlay :show="show" @click="show = false" />
  </div>

  <div :title="t('embeddedContent')">
    <van-button
      type="primary"
      :text="t('embeddedContent')"
      style="margin-left: 16px"
      @click="showEmbedded = true"
    />
    <van-overlay :show="showEmbedded" @click="showEmbedded = false">
      <div class="wrapper">
        <div class="block" />
      </div>
    </van-overlay>
  </div>
</template>

<style lang="less">
.demo-overlay {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: var(--van-background-2);
    border-radius: 4px;
  }
}
</style>
