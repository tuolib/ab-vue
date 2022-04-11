<script setup lang="ts">
import AbvTabs from '../../tabs';
import AbvTab from '../../tab';
import AbvPullRefresh from '..';
import { computed, onMounted, ref } from 'vue';
import { useTranslate } from '../../utils/use-translate';
import { Toast } from '../../toast';
import '../../tabs/style';
import '../../tab/style';
import '../../toast/style';
import '../style';

const t = useTranslate({
  'zh-CN': {
    try: '下拉试试',
    text: '刷新次数',
    success: '刷新成功',
    successTip: '成功提示',
    customTips: '自定义提示',
  },
  'en-US': {
    try: 'Try it down',
    text: 'Refresh Count',
    success: 'Refresh success',
    successTip: 'Success Tip',
    customTips: 'Custom Tips',
  },
});

const count = ref(0);
const loading = ref(false);

const tips = computed(() => {
  if (count.value) {
    return `${t('text')}: ${count.value}`;
  }
  return t('try');
});

const onRefresh = (showToast: boolean) => {
  setTimeout(() => {
    if (showToast) {
      Toast(t('success'));
    }
    loading.value = false;
    count.value++;
  }, 1000);
};

const preloadImage = () => {
  // preload doge image
  const doge = new Image();
  const dogeFire = new Image();

  doge.src = 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg';
  dogeFire.src = 'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg';
};

onMounted(preloadImage);
</script>

<template>
  <abv-tabs>
    <abv-tab :title="t('basicUsage')">
      <abv-pull-refresh v-model="loading" @refresh="onRefresh(true)">
        <p>{{ tips }}</p>
      </abv-pull-refresh>
    </abv-tab>

    <abv-tab :title="t('successTip')">
      <abv-pull-refresh v-model="loading" :success-text="t('success')" @refresh="onRefresh(false)">
        <p>{{ tips }}</p>
      </abv-pull-refresh>
    </abv-tab>

    <abv-tab :title="t('customTips')">
      <abv-pull-refresh v-model="loading" head-height="80" @refresh="onRefresh(true)">
        <template #pulling="{ distance }">
          <img
            class="doge"
            src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
            :style="{ transform: `scale(${distance / 80})` }"
          />
        </template>
        <template #loosing>
          <img src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" class="doge" />
        </template>
        <template #loading>
          <img src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" class="doge" />
        </template>
        <p>{{ tips }}</p>
      </abv-pull-refresh>
    </abv-tab>
  </abv-tabs>
</template>

<style lang="less">
.demo-pull-refresh {
  background-color: var(--abv-background-2);

  .abv-pull-refresh {
    height: calc(100vh - 50px);
  }

  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }

  p {
    margin: 0;
    padding: var(--abv-padding-md) 0 0 var(--abv-padding-md);
  }
}
</style>
