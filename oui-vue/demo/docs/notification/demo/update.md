<cn>
#### 更新消息内容
可以通过唯一的 key 来更新内容。
</cn>

<us>
#### Update Message Content
Update content with unique key.
</us>

```vue
<template>
  <a-button type="primary" @click="openNotification">
    Open the notification box
  </a-button>
</template>
<script>
const key = 'updatable';
export default {
  methods: {
    openNotification() {
      this.$omnotification.open({
        key,
        message: 'Notification Title',
        description: 'description.',
      });
      setTimeout(() => {
        this.$omnotification.open({
          key,
          message: 'New Title',
          description: 'New description.',
        });
      }, 1000);
    },
  },
};
</script>
```
