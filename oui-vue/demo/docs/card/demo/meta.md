<cn>
  #### 支持更多内容配置
  一种支持封面、头像、标题和描述信息的卡片。
</cn>

<us>
  #### Support more content configuration
  A Card that supports `cover`, `avatar`, `title` and `description`.
</us>

```vue
<template>
  <o-card hoverable style="width: 300px">
    <img
      slot="cover"
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
    <template slot="actions" class="ant-card-actions">
      <o-icon key="setting" type="setting" />
      <o-icon key="edit" type="edit" />
      <o-icon key="ellipsis" type="ellipsis" />
    </template>
    <o-card-meta title="Card title" description="This is the description">
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </o-card-meta>
  </o-card>
</template>
```
