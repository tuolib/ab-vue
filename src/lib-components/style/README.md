# Built-in Style

### Intro

abt contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="ab-ellipsis">
  This is a paragraph that displays up to one line of text, and the rest of the
  text will be omitted.
</div>

<div class="ab-multi-ellipsis--l2">
  This is a paragraph that displays up to two lines of text, and the rest of the
  text will be omitted.
</div>

<div class="ab-multi-ellipsis--l3">
  This is a paragraph that displays up to three lines of text, and the rest of
  the text will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="ab-hairline--top"></div>

<!-- border bottom -->
<div class="ab-hairline--bottom"></div>

<!-- border left -->
<div class="ab-hairline--left"></div>

<!-- border right -->
<div class="ab-hairline--right"></div>

<!-- border top & bottom -->
<div class="ab-hairline--top-bottom"></div>

<!-- full border -->
<div class="ab-hairline--surround"></div>
```

### Safe Area

Enable safe area.

```html
<!-- top -->
<div class="ab-safe-area-top"></div>

<!-- bottom -->
<div class="ab-safe-area-bottom"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="ab-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide up -->
<transition name="ab-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- slide down -->
<transition name="ab-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- slide left -->
<transition name="ab-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- slide right -->
<transition name="ab-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```
