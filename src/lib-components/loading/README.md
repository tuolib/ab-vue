# Loading

### Intro

Used to indicate the transition state during loading.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/adabced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Loading } from 'abt';

const app = createApp();
app.use(Loading);
```

## Usage

### Type

```html
<ab-loading />

<ab-loading type="spinner" />
```

### Color

```html
<ab-loading color="#1989fa" />

<ab-loading type="spinner" color="#1989fa" />
```

### Size

```html
<ab-loading size="24" />

<ab-loading type="spinner" size="24px" />
```

### Text

```html
<ab-loading size="24px">Loading...</ab-loading>
```

### Vertical

```html
<ab-loading size="24px" vertical>Loading...</ab-loading>
```

### Text Color

use `color` or `text-color` to change text color.

```html
<!-- the color of text and icon will be changed -->
<ab-loading color="#0094ff" />

<!-- only change text color -->
<ab-loading text-color="#0094ff" />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| color | Loading color | _string_ | `#c9c9c9` |
| type | Can be set to `spinner` | _string_ | `circular` |
| size | Icon size | _number \| string_ | `30px` |
| text-size | Text font size | _number \| string_ | `14px` |
| text-color | Text color | _string_ | `#c9c9c9` |
| vertical | Whether to arrange icons and text content vertically | _boolean_ | `false` |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Loading text |

### Types

The component exports the following type definitions:

```ts
import type { LoadingType, LoadingProps } from 'abt';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                           | Default Value             | Description |
| ------------------------------ | ------------------------- | ----------- |
| --ab-loading-text-color       | _var(--ab-text-color-2)_ | -           |
| --ab-loading-text-font-size   | _var(--ab-font-size-md)_ | -           |
| --ab-loading-spinner-color    | _var(--ab-gray-5)_       | -           |
| --ab-loading-spinner-size     | _30px_                    | -           |
| --ab-loading-spinner-duration | _0.8s_                    | -           |
