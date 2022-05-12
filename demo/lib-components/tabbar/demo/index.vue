<script setup lang="ts">
import AbvTabbar from '..';
import AbvTabbarItem from '../../tabbar-item';
import { ref } from 'vue';
import { useTranslate } from '../../utils/use-translate';
import { Toast } from '../../toast';
import '../../toast/style';
import '../../tabbar-item/style';
import '../style';

const t = useTranslate({
  'zh-CN': {
    badge: '徽标提示',
    customIcon: '自定义图标',
    customColor: '自定义颜色',
    matchByName: '通过名称匹配',
    switchEvent: '监听切换事件',
  },
  'en-US': {
    badge: 'Show Badge',
    customIcon: 'Custom Icon',
    customColor: 'Custom Color',
    matchByName: 'Match by name',
    switchEvent: 'Change Event',
  },
});

const active = ref(0);
const active2 = ref(0);
const active3 = ref(0);
const active4 = ref(0);
const active5 = ref(0);
const activeName = ref('home');

// const icon = {
//   active: cdnURL('user-active.png'),
//   inactive: cdnURL('user-inactive.png'),
// };

const onChange = (index: number) => {
  Toast(`${t('tab')} ${index + 1}`);
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <abv-tabbar v-model="active">
      <abv-tabbar-item icon="home-o">{{ t('tab') }}</abv-tabbar-item>
      <abv-tabbar-item icon="search">{{ t('tab') }}</abv-tabbar-item>
      <abv-tabbar-item icon="friends-o">{{ t('tab') }}</abv-tabbar-item>
      <abv-tabbar-item icon="setting-o">{{ t('tab') }}</abv-tabbar-item>
    </abv-tabbar>
  </demo-block>

  <demo-block :title="t('matchByName')">
    <abv-tabbar v-model="activeName">
      <abv-tabbar-item name="home" icon="home-o">
        {{ t('tab') }}
      </abv-tabbar-item>
      <abv-tabbar-item name="search" icon="search">
        {{ t('tab') }}
      </abv-tabbar-item>
      <abv-tabbar-item name="friends" icon="friends-o">
        {{ t('tab') }}
      </abv-tabbar-item>
      <abv-tabbar-item name="setting" icon="setting-o">
        {{ t('tab') }}
      </abv-tabbar-item>
    </abv-tabbar>
  </demo-block>

  <demo-block :title="t('badge')">
    <abv-tabbar v-model="active2">
      <abv-tabbar-item icon="home-o">{{ t('tab') }}</abv-tabbar-item>
      <abv-tabbar-item icon="search" dot>{{ t('tab') }}</abv-tabbar-item>
      <abv-tabbar-item icon="friends-o" badge="5">
        {{ t('tab') }}
      </abv-tabbar-item>
      <abv-tabbar-item icon="setting-o" badge="20">
        {{ t('tab') }}
      </abv-tabbar-item>
    </abv-tabbar>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <abv-tabbar v-model="active3">
      <abv-tabbar-item badge="3">
        <span>{{ t('custom') }}</span>
      </abv-tabbar-item>
      <abv-tabbar-item>{{ t('tab') }}</abv-tabbar-item>
      <abv-tabbar-item icon="setting-o">{{ t('tab') }}</abv-tabbar-item>
    </abv-tabbar>
  </demo-block>

  <demo-block :title="t('customColor')">
    <abv-tabbar v-model="active4" active-color="#ee0a24">
      <abv-tabbar-item icon="home-o">{{ t('tab') }}</abv-tabbar-item>
      <abv-tabbar-item icon="search">{{ t('tab') }}</abv-tabbar-item>
      <abv-tabbar-item icon="friends-o">{{ t('tab') }}</abv-tabbar-item>
      <abv-tabbar-item icon="setting-o">{{ t('tab') }}</abv-tabbar-item>
    </abv-tabbar>
  </demo-block>

  <demo-block :title="t('switchEvent')">
    <abv-tabbar v-model="active5" @change="onChange">
      <abv-tabbar-item icon="home-o">{{ `${t('tab')} 1` }}</abv-tabbar-item>
      <abv-tabbar-item icon="search">{{ `${t('tab')} 2` }}</abv-tabbar-item>
      <abv-tabbar-item icon="friends-o">{{ `${t('tab')} 3` }}</abv-tabbar-item>
      <abv-tabbar-item icon="setting-o">{{ `${t('tab')} 4` }}</abv-tabbar-item>
    </abv-tabbar>
  </demo-block>
</template>

<style lang="less">
.demo-tabbar {
  .abv-tabbar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
