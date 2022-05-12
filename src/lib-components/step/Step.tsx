import { computed, defineComponent } from 'vue';

// Utils
import { BORDER, createNamespace } from '../utils';
import { STEPS_KEY } from '../steps/Steps';

// Composables
import { useParent } from '@vant/use';

// Components
// import { Icon } from '../icon';

const [name, bem] = createNamespace('step');

export default defineComponent({
  name,

  // @ts-ignore
  setup(props, { slots }) {
    const { parent, index } = useParent(STEPS_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Abv] <Step> must be a child component of <Steps>.');
      }
      return;
    }

    const parentProps = parent.props;

    const getStatus = () => {
      const active = +parentProps.active;
      if (index.value < active) {
        return 'finish';
      }
      return index.value === active ? 'process' : 'waiting';
    };

    const isActive = () => getStatus() === 'process';

    const lineStyle = computed(() => ({
      background: getStatus() === 'finish' ? parentProps.activeColor : parentProps.inactiveColor,
    }));

    // eslint-disable-next-line vue/return-in-computed-property
    const titleStyle = computed(() => {
      if (isActive()) {
        return { color: parentProps.activeColor };
      }
      if (getStatus() === 'waiting') {
        return { color: parentProps.inactiveColor };
      }
    });

    const onClickStep = () => parent.onClickStep(index.value);

    const renderCircle = () => {
      const { finishIcon, activeColor, inactiveIcon } = parentProps;

      if (isActive()) {
        if (slots['active-icon']) {
          return slots['active-icon']();
        }

        return <span class={bem('icon', 'active')} color={activeColor} />;
      }

      if (getStatus() === 'finish' && (finishIcon || slots['finish-icon'])) {
        if (slots['finish-icon']) {
          return slots['finish-icon']();
        }

        return <span class={bem('icon', 'finish')} color={activeColor} />;
      }

      if (slots['inactive-icon']) {
        return slots['inactive-icon']();
      }

      if (inactiveIcon) {
        return <span class={bem('icon')} />;
      }

      return <i class={bem('circle')} style={lineStyle.value} />;
    };

    return () => {
      const status = getStatus();

      return (
        <div class={[BORDER, bem([parentProps.direction, { [status]: status }])]}>
          <div
            class={bem('title', { active: isActive() })}
            style={titleStyle.value}
            onClick={onClickStep}
          >
            {slots.default?.()}
          </div>
          <div class={bem('circle-container')} onClick={onClickStep}>
            {renderCircle()}
          </div>
          <div class={bem('line')} style={lineStyle.value} />
        </div>
      );
    };
  },
});
