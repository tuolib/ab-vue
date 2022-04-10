<script setup lang="ts">
import AbvTabs from '../../tabs';
import AbvTab from '..';
// import AbvIcon from '../../icon';
import { ref } from 'vue';
import { useTranslate } from '../../utils/use-translate';
import { Toast } from '../../toast';
import Shrink from './Shrink.vue';
import '../../toast/style';
// import '../../sticky/style';
// import '../../swipe/style';
// import '../../swipe-item/style';
import '../../tabs/style';
import '../style';
// import DemoBlock from "../../../../dev/serve";

const t = useTranslate({
  'zh-CN': {
    tab: '标签 ',
    title2: '标签栏滚动',
    title3: '禁用标签',
    title4: '样式风格',
    title5: '点击事件',
    title6: '粘性布局',
    title7: '自定义标签',
    title8: '切换动画',
    title9: '滑动切换',
    title10: '滚动导航',
    disabled: ' 已被禁用',
    matchByName: '通过名称匹配',
    beforeChange: '异步切换',
  },
  'en-US': {
    tab: 'Tab ',
    content: 'content of tab',
    title2: 'Swipe Tabs',
    title3: 'Disabled Tab',
    title4: 'Card Style',
    title5: 'Click Event',
    title6: 'Sticky',
    title7: 'Custom Tab',
    title8: 'Switch Animation',
    title9: 'Swipeable',
    title10: 'Scrollspy',
    disabled: ' is disabled',
    matchByName: 'Match By Name',
    beforeChange: 'Before Change',
  },
});

const active1 = ref(0);
const active2 = ref(0);
const active3 = ref(0);
const active4 = ref(0);
const active5 = ref(0);
const active6 = ref(0);
const active7 = ref(0);
const active8 = ref(0);
const active9 = ref(0);
const active10 = ref(0);
const active11 = ref(0);
const activeName = ref('b');

const tabs = [1, 2, 3, 4];

const onClickTab = ({ title }: { title: string }) => {
  Toast(title);
};

const beforeChange = (name: number) => {
  if (name === 1) {
    return false;
  }
  return new Promise<boolean>(resolve => {
    resolve(name !== 3);
  });
};
</script>

<template>
  <demo-block class="demo-tab" :title="t('basicUsage')">
    <abv-tabs v-model:active="active1">
      <abv-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>

  <demo-block class="demo-tab" :title="t('matchByName')">
    <abv-tabs v-model:active="activeName">
      <abv-tab name="a" :title="t('tab') + 1"> {{ t('content') }} 1 </abv-tab>
      <abv-tab name="b" :title="t('tab') + 2"> {{ t('content') }} 2 </abv-tab>
      <abv-tab name="c" :title="t('tab') + 3"> {{ t('content') }} 3 </abv-tab>
    </abv-tabs>
  </demo-block>

  <demo-block class="demo-tab" :title="t('title2')">
    <abv-tabs v-model:active="active2">
      <abv-tab v-for="index in 8" :title="t('tab') + index" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>

  <demo-block class="demo-tab" :title="t('title3')">
    <abv-tabs v-model:active="active3">
      <abv-tab v-for="index in 3" :title="t('tab') + index" :disabled="index === 2" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>

  <demo-block class="demo-tab" :title="t('title4')">
    <abv-tabs v-model:active="active4" type="card">
      <abv-tab v-for="index in 3" :title="t('tab') + index" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>

  <demo-block class="demo-tab" :title="t('title5')">
    <abv-tabs v-model:active="active5" @click-tab="onClickTab">
      <abv-tab v-for="index in 2" :title="t('tab') + index" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>

  <demo-block class="demo-tab" :title="t('title6')">
    <abv-tabs v-model:active="active6" sticky>
      <abv-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>

  <shrink />

  <demo-block class="demo-tab" :title="t('title7')">
    <abv-tabs v-model:active="active7">
      <abv-tab v-for="index in 2" :key="index">
        <template #title> <span></span>{{ t('tab') }} </template>
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>

  <demo-block class="demo-tab" :title="t('title8')">
    <abv-tabs v-model:active="active8" animated>
      <abv-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>

  <demo-block class="demo-tab" :title="t('title9')">
    <abv-tabs v-model:active="active9" swipeable>
      <abv-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>

  <demo-block class="demo-tab" :title="t('title10')">
    <abv-tabs v-model:active="active10" scrollspy sticky>
      <abv-tab :title="t('tab') + index" v-for="index in 8" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>

  <demo-block class="demo-tab" :title="t('beforeChange')">
    <abv-tabs v-model:active="active11" :before-change="beforeChange">
      <abv-tab :title="t('tab') + index" v-for="index in 4" :key="index">
        {{ t('content') }} {{ index }}
      </abv-tab>
    </abv-tabs>
  </demo-block>
</template>

<style lang="less">
.demo-tab {
  margin-top: 30px;
  margin-bottom: 80vh;
  //.abv-tab {
  //  height: 80vh;
  //}
  .abv-tab .abv-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .abv-tab__panel {
    padding: 24px 20px;
    background: var(--abv-background-2);
  }

  .abv-tabs--card .abv-tab__panel {
    background: transparent;
  }
}
</style>
