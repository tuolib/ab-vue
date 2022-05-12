<script setup lang="ts">
import AbvSwipe from '..';
import AbvSwipeItem from '../../swipe-item';
import { useTranslate } from '../../utils/use-translate';
import { Toast } from '../../toast';
import '../style';
import '../../swipe-item/style';

const t = useTranslate({
  'zh-CN': {
    title2: '懒加载',
    title3: '监听 change 事件',
    title4: '纵向滚动',
    title5: '自定义滑块大小',
    title6: '自定义指示器',
    message: '当前 Swipe 索引：',
  },
  'en-US': {
    title2: 'Lazy Render',
    title3: 'Change Event',
    title4: 'Vertical Scrolling',
    title5: 'Set SwipeItem Size',
    title6: 'Custom indicator',
    message: 'Current Swipe index:',
  },
});

const images = [
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
];

const onChange = (index: number) => Toast(t('message') + index);
</script>

<template>
  <div class="demo-swipe">
    <div :title="t('basicUsage')">
      <abv-swipe :autoplay="3000" indicator-color="white">
        <abv-swipe-item>1</abv-swipe-item>
        <abv-swipe-item>2</abv-swipe-item>
        <abv-swipe-item>3</abv-swipe-item>
        <abv-swipe-item>4</abv-swipe-item>
      </abv-swipe>
    </div>

    <div :title="t('title2')">
      <abv-swipe :autoplay="3000" lazy-render>
        <abv-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </abv-swipe-item>
      </abv-swipe>
    </div>

    <div :title="t('title3')">
      <abv-swipe indicator-color="white" @change="onChange">
        <abv-swipe-item>1</abv-swipe-item>
        <abv-swipe-item>2</abv-swipe-item>
        <abv-swipe-item>3</abv-swipe-item>
        <abv-swipe-item>4</abv-swipe-item>
      </abv-swipe>
    </div>

    <div :title="t('title4')">
      <abv-swipe
        vertical
        :autoplay="3000"
        indicator-color="white"
        style="height: 200px"
        class="demo-swipe--vertical"
      >
        <abv-swipe-item>1</abv-swipe-item>
        <abv-swipe-item>2</abv-swipe-item>
        <abv-swipe-item>3</abv-swipe-item>
        <abv-swipe-item>4</abv-swipe-item>
      </abv-swipe>
    </div>

    <div :title="t('title5')">
      <abv-swipe :width="300" :loop="false" indicator-color="white">
        <abv-swipe-item>1</abv-swipe-item>
        <abv-swipe-item>2</abv-swipe-item>
        <abv-swipe-item>3</abv-swipe-item>
        <abv-swipe-item>4</abv-swipe-item>
      </abv-swipe>
    </div>

    <div :title="t('title6')">
      <abv-swipe>
        <abv-swipe-item>1</abv-swipe-item>
        <abv-swipe-item>2</abv-swipe-item>
        <abv-swipe-item>3</abv-swipe-item>
        <abv-swipe-item>4</abv-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </abv-swipe>
    </div>
  </div>
</template>

<style lang="less">
.demo-swipe {
  padding-bottom: 30px;

  .abv-swipe {
    margin-bottom: 30px;
    &-item {
      color: var(--van-white);
      font-size: 20px;
      line-height: 150px;
      text-align: center;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: var(--van-white);
      pointer-events: none;
    }
  }

  &--vertical {
    .abv-swipe-item {
      line-height: 200px;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: var(--van-white);
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
