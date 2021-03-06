---
order: 9
title:
  zh-CN: 危险按钮
  en-US: Danger Buttons
---

## zh-CN

在 4.0 之后，危险成为一种按钮属性而不是按钮类型。

## en-US

`danger` is a property of button after antd 4.0.

```jsx
import {Button} from 'skd';

ReactDOM.render(
  <div className="container">
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </div>,
  mountNode,
);
```

```css
.container {
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
}
.container .ant-btn {
    margin-right: 8px;
    margin-bottom: 12px;
}
```
