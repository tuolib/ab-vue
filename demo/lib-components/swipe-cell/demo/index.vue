<script setup lang="ts">
import AbvSwipeCell from '..';
import AbvButton from '../../button';
import AbvCell from '../../cell';
// import VanCard from '../../card';
import { useTranslate } from '../../utils/use-translate';
import { Dialog } from '../../dialog';
const t = useTranslate({
  'zh-CN': {
    select: '选择',
    delete: '删除',
    collect: '收藏',
    title: '单元格',
    confirm: '确定删除吗？',
    cardTitle: '商品标题',
    beforeClose: '异步关闭',
    customContent: '自定义内容',
  },
  'en-US': {
    select: 'Select',
    delete: 'Delete',
    collect: 'Collect',
    title: 'Cell',
    confirm: 'Are you sure to delete?',
    cardTitle: 'Title',
    beforeClose: 'Before Close',
    customContent: 'Custom Content',
  },
});

// const imageURL = cdnURL('ipad.jpeg');

const beforeClose = ({ position }: { position: string }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true;
    case 'right':
      return new Promise<boolean>(resolve => {
        Dialog.confirm({
          title: t('confirm'),
        }).then(() => {
          resolve(true);
        });
      });
  }
};
</script>

<template>
  <div :title="t('basicUsage')">
    <abv-swipe-cell>
      <template #left>
        <abv-button square type="primary" :text="t('select')" />
      </template>
      <abv-cell :border="false" :title="t('title')" :value="t('content')" />
      <template #right>
        <abv-button square type="danger" :text="t('delete')" />
        <abv-button square type="primary" :text="t('collect')" />
      </template>
    </abv-swipe-cell>
  </div>

  <div :title="t('customContent')">
    <abv-swipe-cell>
      <!--      <van-card-->
      <!--        num="2"-->
      <!--        price="2.00"-->
      <!--        :desc="t('desc')"-->
      <!--        :title="t('cardTitle')"-->
      <!--        :thumb="imageURL"-->
      <!--      />-->
      <template #right>
        <abv-button square type="danger" class="delete-button" :text="t('delete')" />
      </template>
    </abv-swipe-cell>
  </div>

  <div :title="t('beforeClose')">
    <abv-swipe-cell :before-close="beforeClose">
      <template #left>
        <abv-button square type="primary" :text="t('select')" />
      </template>
      <abv-cell :border="false" :title="t('title')" :value="t('content')" />
      <template #right>
        <abv-button square type="danger" :text="t('delete')" />
      </template>
    </abv-swipe-cell>
  </div>
</template>

<style lang="less">
.demo-swipe-cell {
  user-select: none;

  .van-card {
    margin: 0;
    background-color: var(--van-background-2);
  }

  .delete-button {
    height: 100%;
  }
}
</style>
