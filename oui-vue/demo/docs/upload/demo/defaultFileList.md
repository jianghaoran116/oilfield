<cn>
#### 已上传的文件列表
使用 `defaultFileList` 设置已上传的内容。
</cn>

<us>
#### Default Files
Use `defaultFileList` for uploaded files when page init.
</us>

```vue
<template>
  <o-upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :default-file-list="defaultFileList"
  >
    <o-button> <o-icon type="upload" /> Upload </o-button>
  </o-upload>
</template>
<script>
export default {
  data() {
    return {
      defaultFileList: [
        {
          uid: '1',
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png',
        },
        {
          uid: '2',
          name: 'yyy.png',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png',
        },
        {
          uid: '3',
          name: 'zzz.png',
          status: 'error',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/zzz.png',
        },
      ],
    };
  },
  methods: {
    handleChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
  },
};
</script>
```
