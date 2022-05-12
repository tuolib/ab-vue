import { computed, defineComponent } from 'vue';
import type { CSSProperties } from 'vue';
import { isDef, truthProp, numericProp, createNamespace } from '../utils';
// import { Badge } from '../badge';

const [name, bem] = createNamespace('tab');

export default defineComponent({
  name,

  props: {
    id: String,
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: numericProp,
    shrink: Boolean,
    isActive: Boolean,
    disabled: Boolean,
    controls: String,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    showZeroBadge: truthProp,
  },

  setup(props, { slots }) {
    const style = computed(() => {
      const styles: CSSProperties = {};
      const { type, color, disabled, isActive, activeColor, inactiveColor } = props;

      const isCard = type === 'card';

      // card theme color
      if (color && isCard) {
        styles.borderColor = color;

        if (!disabled) {
          if (isActive) {
            styles.backgroundColor = color;
          } else {
            styles.color = color;
          }
        }
      }

      const titleColor = isActive ? activeColor : inactiveColor;
      if (titleColor) {
        styles.color = titleColor;
      }

      return styles;
    });

    const renderText = () => {
      const Text = (
        <span class={bem('text', { ellipsis: !props.scrollable })}>
          {slots.title ? slots.title() : props.title}
        </span>
      );

      if (props.dot || (isDef(props.badge) && props.badge !== '')) {
        return (
          <span
            // @ts-ignore
            dot={props.dot}
            content={props.badge}
            showZero={props.showZeroBadge}
          >
            {Text}
          </span>
        );
      }

      return Text;
    };

    return () => (
      <div
        id={props.id}
        role="tab"
        class={[
          bem([
            props.type,
            {
              grow: props.scrollable && !props.shrink,
              shrink: props.shrink,
              active: props.isActive,
              disabled: props.disabled,
            },
          ]),
        ]}
        style={style.value}
        tabindex={props.disabled ? undefined : props.isActive ? 0 : -1}
        aria-selected={props.isActive}
        aria-disabled={props.disabled || undefined}
        aria-controls={props.controls}
      >
        {renderText()}
      </div>
    );
  },
});
