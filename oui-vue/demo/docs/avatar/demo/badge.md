<cn>
#### 带徽标的头像
通常用于消息提示。
</cn>

<us>
#### With Badge
Usually used for reminders and notifications.
</us>

```vue
<template>
  <div>
    <span style="margin-right:24px">
      <a-badge :count="1"><o-avatar shape="square" icon="user"/></a-badge>
    </span>
    <span>
      <a-badge dot><o-avatar shape="square" icon="user"/></a-badge>
    </span>
  </div>
</template>
```
