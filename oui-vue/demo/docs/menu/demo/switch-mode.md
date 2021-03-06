<cn>
#### 切换菜单类型
展示动态切换模式。
</cn>

<us>
#### Switch the menu type
Show the dynamic switching mode (between 'inline' and 'vertical').
</us>

```vue
<template>
  <div>
    <o-switch :default-checked="false" @change="changeMode" /> Change Mode
    <span className="ant-divider" style="margin: 0 1em" />
    <o-switch :default-checked="false" @change="changeTheme" /> Change Theme
    <br />
    <br />
    <o-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      :mode="mode"
      :theme="theme"
    >
      <o-menu-item key="1">
        <a-icon type="mail" />
        Navigation One
      </o-menu-item>
      <o-menu-item key="2">
        <a-icon type="calendar" />
        Navigation Two
      </o-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
        <o-menu-item key="3">
          Option 3
        </o-menu-item>
        <o-menu-item key="4">
          Option 4
        </o-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <o-menu-item key="5">
            Option 5
          </o-menu-item>
          <o-menu-item key="6">
            Option 6
          </o-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="setting" /><span>Navigation Four</span></span>
        <o-menu-item key="7">
          Option 7
        </o-menu-item>
        <o-menu-item key="8">
          Option 8
        </o-menu-item>
        <o-menu-item key="9">
          Option 9
        </o-menu-item>
        <o-menu-item key="10">
          Option 10
        </o-menu-item>
      </a-sub-menu>
    </o-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: 'inline',
      theme: 'light',
    };
  },
  methods: {
    changeMode(checked) {
      this.mode = checked ? 'vertical' : 'inline';
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
  },
};
</script>
```
