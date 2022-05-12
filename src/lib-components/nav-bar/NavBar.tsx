import { ref, defineComponent } from 'vue';
import type { CSSProperties, ExtractPropTypes } from 'vue';
// Utils
import {
  truthProp,
  numericProp,
  BORDER_BOTTOM,
  getZIndexStyle,
  createNamespace,
  HAPTICS_FEEDBACK,
} from '../utils';

// Composables
import { usePlaceholder } from '../composables/use-placeholder';

// Components
// import { Icon } from '../icon';

const [name, bem] = createNamespace('nav-bar');

const navBarProps = {
  title: String,
  fixed: Boolean,
  zIndex: numericProp,
  border: truthProp,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  placeholder: Boolean,
  safeAreaInsetTop: Boolean,
};

export type NavBarProps = ExtractPropTypes<typeof navBarProps>;

export default defineComponent({
  name,

  props: navBarProps,

  emits: ['clickLeft', 'clickRight'],

  setup(props, { emit, slots }) {
    const navBarRef = ref<HTMLElement>();
    const renderPlaceholder = usePlaceholder(navBarRef, bem);

    const onClickLeft = (event: MouseEvent) => emit('clickLeft', event);
    const onClickRight = (event: MouseEvent) => emit('clickRight', event);

    const renderLeft = () => {
      if (slots.left) {
        return slots.left();
      }

      return [
        props.leftArrow && <span class={bem('arrow')}></span>,
        props.leftText && <span class={bem('text')}>{props.leftText}</span>,
      ];
    };

    const renderRight = () => {
      if (slots.right) {
        return slots.right();
      }

      return <span class={bem('text')}>{props.rightText}</span>;
    };

    const renderNavBar = () => {
      const { title, fixed, border, zIndex } = props;
      const style: CSSProperties = getZIndexStyle(zIndex);

      const hasLeft = props.leftArrow || props.leftText || slots.left;
      const hasRight = props.rightText || slots.right;

      return (
        <div
          ref={navBarRef}
          style={style}
          class={[
            bem({ fixed }),
            {
              [BORDER_BOTTOM]: border,
              'abv-safe-area-top': props.safeAreaInsetTop,
            },
          ]}
        >
          <div class={bem('content')}>
            {hasLeft && (
              <div class={[bem('left'), HAPTICS_FEEDBACK]} onClick={onClickLeft}>
                {renderLeft()}
              </div>
            )}
            <div class={[bem('title'), 'abv-ellipsis']}>{slots.title ? slots.title() : title}</div>
            {hasRight && (
              <div class={[bem('right'), HAPTICS_FEEDBACK]} onClick={onClickRight}>
                {renderRight()}
              </div>
            )}
          </div>
        </div>
      );
    };

    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderNavBar);
      }
      return renderNavBar();
    };
  },
});
