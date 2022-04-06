# 内置样式

### 介绍

abt 中默认包含了一些常用样式，可以直接通过 className 的方式使用。

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```html
<!-- 最多显示一行 -->
<div class="ab-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>

<!-- 最多显示两行 -->
<div class="ab-multi-ellipsis--l2">
  这是一段最多显示两行的文字，多余的内容会被省略
</div>

<!-- 最多显示三行 -->
<div class="ab-multi-ellipsis--l3">
  这是一段最多显示三行的文字，多余的内容会被省略
</div>
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```html
<!-- 上边框 -->
<div class="ab-hairline--top"></div>

<!-- 下边框 -->
<div class="ab-hairline--bottom"></div>

<!-- 左边框 -->
<div class="ab-hairline--left"></div>

<!-- 右边框 -->
<div class="ab-hairline--right"></div>

<!-- 上下边框 -->
<div class="ab-hairline--top-bottom"></div>

<!-- 全边框 -->
<div class="ab-hairline--surround"></div>
```

### 安全区

为元素添加安全区适配。

```html
<!-- 顶部安全区 -->
<div class="ab-safe-area-top"></div>

<!-- 底部安全区 -->
<div class="ab-safe-area-bottom"></div>
```

### 动画

可以通过 `transition` 组件使用内置的动画类。

```html
<!-- 淡入 -->
<transition name="ab-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- 上滑进入 -->
<transition name="ab-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- 下滑进入 -->
<transition name="ab-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- 左滑进入 -->
<transition name="ab-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- 右滑进入 -->
<transition name="ab-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```
