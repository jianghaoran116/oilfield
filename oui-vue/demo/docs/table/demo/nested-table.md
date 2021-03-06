<cn>
#### 嵌套子表格
展示每行数据更详细的信息。
</cn>

<us>
#### Nested tables
Showing more detailed info of every row.
</us>

```vue
<template>
  <o-table :columns="columns" :data-source="data" class="components-table-demo-nested">
    <a slot="operation" slot-scope="text">Publish</a>
    <o-table
      slot="expandedRowRender"
      slot-scope="text"
      :columns="innerColumns"
      :data-source="innerData"
      :pagination="false"
    >
      <span slot="status" slot-scope="text"> <a-badge status="success" />Finished </span>
      <span slot="operation" slot-scope="text" class="table-operation">
        <a>Pause</a>
        <a>Stop</a>
        <a-dropdown>
          <o-menu slot="overlay">
            <o-menu-item>
              Action 1
            </o-menu-item>
            <o-menu-item>
              Action 2
            </o-menu-item>
          </o-menu>
          <a> More <o-icon type="down" /> </a>
        </a-dropdown>
      </span>
    </o-table>
  </o-table>
</template>
<script>
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation', scopedSlots: { customRender: 'operation' } },
];

const data = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: 'Screem',
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
  });
}

const innerColumns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', key: 'state', scopedSlots: { customRender: 'status' } },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];

const innerData = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: '2014-12-24 23:12:00',
    name: 'This is production name',
    upgradeNum: 'Upgraded: 56',
  });
}

export default {
  data() {
    return {
      data,
      columns,
      innerColumns,
      innerData,
    };
  },
};
</script>
```
