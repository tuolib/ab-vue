<script setup lang="ts">
import AbvCheckbox from '..';
import AbvCheckboxGroup from '../../checkbox-group';
import AbvButton from '../../button';
import AbvCellGroup from '../../cell-group';
import AbvCell from '../../cell';
import { ref, reactive } from 'vue';
import { useTranslate } from '../../utils/use-translate';
import { useRefs } from '../../composables/use-refs';
import type { CheckboxInstance } from '../types';
import type { CheckboxGroupInstance } from '../../checkbox-group';

import '../../button/style';
import '../../cell/style';
import '../../cell-group/style';
import '../../checkbox-group/style';
import '../style';

const t = useTranslate({
  'zh-CN': {
    checkbox: '复选框',
    customIcon: '自定义图标',
    customIconSize: '自定义大小',
    customColor: '自定义颜色',
    customShape: '自定义形状',
    title3: '复选框组',
    title4: '限制最大可选数',
    title5: '搭配单元格组件使用',
    toggleAll: '全选与反选',
    checkAll: '全选',
    inverse: '反选',
    horizontal: '水平排列',
    disableLabel: '禁用文本点击',
  },
  'en-US': {
    checkbox: 'Checkbox',
    customIcon: 'Custom Icon',
    customIconSize: 'Custom Icon Size',
    customColor: 'Custom Color',
    customShape: 'Custom Shape',
    title3: 'Checkbox Group',
    title4: 'Maximum amount of checked options',
    title5: 'Inside a Cell',
    toggleAll: 'Toggle All',
    checkAll: 'Check All',
    inverse: 'Inverse',
    horizontal: 'Horizontal',
    disableLabel: 'Disable label click',
  },
});

const state = reactive({
  checkbox1: true,
  checkbox2: true,
  checkbox3: true,
  checkboxShape: true,
  checkboxLabel: true,
  checkboxIcon: true,
  list: ['a', 'b'],
  result: ['a', 'b'],
  result2: [],
  result3: [],
  checkAllResult: [],
  horizontalResult: [],
});

// const activeIcon = cdnURL('user-active.png');
// const inactiveIcon = cdnURL('user-inactive.png');

const group = ref<CheckboxGroupInstance>();
const [refs, setRefs] = useRefs<CheckboxInstance>();

const toggle = (index: number) => {
  refs.value[index].toggle();
};

const checkAll = () => {
  group.value?.toggleAll(true);
};

const toggleAll = () => {
  group.value?.toggleAll();
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <abv-checkbox v-model="state.checkbox1">{{ t('checkbox') }}</abv-checkbox>
  </demo-block>

  <demo-block :title="t('disabled')">
    <abv-checkbox :model-value="false" disabled>
      {{ t('checkbox') }}
    </abv-checkbox>
    <abv-checkbox :model-value="true" disabled>
      {{ t('checkbox') }}
    </abv-checkbox>
  </demo-block>

  <demo-block :title="t('customShape')">
    <abv-checkbox v-model="state.checkboxShape" shape="square">
      {{ t('customShape') }}
    </abv-checkbox>
  </demo-block>

  <demo-block :title="t('customColor')">
    <abv-checkbox v-model="state.checkbox2" checked-color="#ee0a24">
      {{ t('customColor') }}
    </abv-checkbox>
  </demo-block>

  <demo-block :title="t('customIconSize')">
    <abv-checkbox v-model="state.checkboxIcon" icon-size="24px">
      {{ t('customIconSize') }}
    </abv-checkbox>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <abv-checkbox v-model="state.checkbox3">
      {{ t('customIcon') }}
      <template #icon="{ checked }">
        <img :src="checked ? '' : ''" />
      </template>
    </abv-checkbox>
  </demo-block>

  <demo-block :title="t('disableLabel')">
    <abv-checkbox v-model="state.checkboxLabel" label-disabled>
      {{ t('checkbox') }}
    </abv-checkbox>
  </demo-block>

  <demo-block :title="t('title3')">
    <abv-checkbox-group v-model="state.result">
      <abv-checkbox name="a">{{ t('checkbox') }} a</abv-checkbox>
      <abv-checkbox name="b">{{ t('checkbox') }} b</abv-checkbox>
    </abv-checkbox-group>
  </demo-block>

  <demo-block :title="t('horizontal')">
    <abv-checkbox-group v-model="state.horizontalResult" direction="horizontal">
      <abv-checkbox name="a">{{ t('checkbox') }} a</abv-checkbox>
      <abv-checkbox name="b">{{ t('checkbox') }} b</abv-checkbox>
    </abv-checkbox-group>
  </demo-block>

  <demo-block :title="t('title4')">
    <abv-checkbox-group v-model="state.result2" :max="2">
      <abv-checkbox name="a">{{ t('checkbox') }} a</abv-checkbox>
      <abv-checkbox name="b">{{ t('checkbox') }} b</abv-checkbox>
      <abv-checkbox name="c">{{ t('checkbox') }} c</abv-checkbox>
    </abv-checkbox-group>
  </demo-block>

  <demo-block :title="t('toggleAll')">
    <abv-checkbox-group v-model="state.checkAllResult" ref="group">
      <abv-checkbox name="a">{{ t('checkbox') }} a</abv-checkbox>
      <abv-checkbox name="b">{{ t('checkbox') }} b</abv-checkbox>
      <abv-checkbox name="c">{{ t('checkbox') }} c</abv-checkbox>
    </abv-checkbox-group>

    <div class="demo-checkbox-buttons">
      <abv-button type="primary" @click="checkAll">
        {{ t('checkAll') }}
      </abv-button>
      <abv-button type="primary" @click="toggleAll">
        {{ t('inverse') }}
      </abv-button>
    </div>
  </demo-block>

  <demo-block :title="t('title5')">
    <abv-checkbox-group v-model="state.result3">
      <abv-cell-group inset>
        <abv-cell
          v-for="(item, index) in state.list"
          clickable
          :key="index"
          :title="`${t('checkbox')} ${item}`"
          @click="toggle(index)"
        >
          <template #right-icon>
            <abv-checkbox :ref="setRefs(index)" :name="item" @click.stop />
          </template>
        </abv-cell>
      </abv-cell-group>
    </abv-checkbox-group>
  </demo-block>
</template>

<style lang="less">
.demo-checkbox {
  .abv-checkbox {
    margin: 0 0 8px 20px;
  }

  .abv-cell {
    .abv-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: var(--abv-padding-md);

    .abv-button {
      margin-left: var(--abv-padding-md);
    }
  }

  .abv-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
