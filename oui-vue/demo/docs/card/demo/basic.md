<cn>
#### 典型卡片
包含标题、内容、操作区域。
可通过设置size为`default`或者`small`，控制尺寸
</cn>

<us>
#### Basic card
A basic card containing a title, content and an extra corner content.
Supports two sizes: `default` and `small`.
</us>

```vue
<template>
  <div>
    <o-card title="Default size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </o-card>
    <br />
    <o-card size="small" title="Small size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </o-card>
  </div>
</template>
```
