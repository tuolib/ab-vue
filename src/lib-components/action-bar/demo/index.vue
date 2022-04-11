<script setup lang="ts">
import AbvActionBar from '..';
// import AbvActionBarIcon from '../../action-bar-icon';
import AbvActionBarButton from '../../action-bar-button';
import { useTranslate } from '../../utils/use-translate';
import { Toast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    icon1: '客服',
    icon2: '购物车',
    icon3: '店铺',
    button1: '加入购物车',
    button2: '立即购买',
    iconBadge: '徽标提示',
    collected: '已收藏',
    clickIcon: '点击图标',
    clickButton: '点击按钮',
    customIconColor: '自定义图标颜色',
    customButtonColor: '自定义按钮颜色',
  },
  'en-US': {
    icon1: 'Icon1',
    icon2: 'Icon2',
    icon3: 'Icon3',
    button1: 'Button',
    button2: 'Button',
    iconBadge: 'Icon Badge',
    collected: 'Collected',
    clickIcon: 'Click Icon',
    clickButton: 'Click Button',
    customIconColor: 'Custom Icon Color',
    customButtonColor: 'Custom Button Color',
  },
});
// const onClickIcon = () => Toast(t('clickIcon'));
const onClickButton = () => Toast(t('clickButton'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <abv-action-bar>
      <abv-action-bar-button type="danger" :text="t('button2')" @click="onClickButton" />
    </abv-action-bar>
  </demo-block>

  <demo-block :title="t('iconBadge')">
    <abv-action-bar>
      <abv-action-bar-button type="warning" :text="t('button1')" />
      <abv-action-bar-button type="danger" :text="t('button2')" />
    </abv-action-bar>
  </demo-block>

  <demo-block :title="t('customIconColor')">
    <abv-action-bar>
      <abv-action-bar-button type="warning" :text="t('button1')" />
      <abv-action-bar-button type="danger" :text="t('button2')" />
    </abv-action-bar>
  </demo-block>

  <demo-block :title="t('customButtonColor')">
    <abv-action-bar>
      <abv-action-bar-button color="#be99ff" type="warning" :text="t('button1')" />
      <abv-action-bar-button color="#7232dd" type="danger" :text="t('button2')" />
    </abv-action-bar>
  </demo-block>
</template>

<style lang="less">
.demo-action-bar {
  .abv-action-bar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
