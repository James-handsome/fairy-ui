### Upload 上传

### 概述
---
文件选择上传和拖拽上传控件。暂不支持 IE9 浏览器。


#### 基本用法 
---
最基本用法，点击上传，一次选择一个文件。


::: demo
```vue
<template>
    <f-upload action="//jsonplaceholder.typicode.com/posts/">
        <f-button type="ghost" icon="ios-cloud-upload-outline">上传文件</f-button>
    </f-upload>
</template>
<script>
    export default {
        
    }
</script>
```
:::


#### 多选
---
设置属性 `multiple`，可以选择多个文件。

::: demo
```vue
<template>
    <f-upload
        multiple
        action="//jsonplaceholder.typicode.com/posts/">
        <f-button type="ghost" icon="ios-cloud-upload-outline">上传文件</f-button>
    </f-upload>
</template>
<script>
    export default {
        
    }
</script>
```
:::


#### 拖拽上传 
---
设置属性 `multiple`，可以选择多个文件


::: demo
```vue
<template>
    <f-upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或将文件拖拽到这里上传</p>
        </div>
    </f-upload>
</template>
<script>
    export default {
        
    }
</script>
```
:::

#### 自定义上传列表 
可以自由控制上传列表，完成各种业务逻辑，示例是一个照片墙，可以查看大图和删除。
  + 设置属性 show-upload-list 为 false，可以不显示默认的上传列表。
  + 设置属性 default-file-list 设置默认已上传的列表。
  + 通过 on-success 等属性来控制完整的上传过程，详见API。
 > 另外，可以通过丰富的配置，来定制上传需求，本例中包含了：
  + 文件必须是 jpg 或 png 格式的图片。
  + 最多上传5张图片。
  + 每个文件大小不超过 2M。

::: demo
```vue
  <template>
    <div class="demo-upload-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <f-progress v-if="item.showProgress" :percent="item.percentage" hide-info></f-progress>
        </template>
    </div>
    <f-upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="camera" size="20"></Icon>
        </div>
    </f-upload>
    <f-modal title="查看图片" v-model="visible">
        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
    </f-modal>
</template>
<script>
    export default {
        data () {
            return {
                defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://img1.baidu.com/it/u=2748099519,2725604264&fm=253&fmt=auto&app=138&f=JPEG'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://img1.baidu.com/it/u=2748099519,2725604264&fm=253&fmt=auto&app=138&f=JPEG'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: []
            }
        },
        methods: {
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                // 从 upload 实例删除数据
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                // 因为上传过程为实例，这里模拟添加 url
                file.url = 'https://img1.baidu.com/it/u=2748099519,2725604264&fm=253&fmt=auto&app=138&f=JPEG';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传 5 张图片。'
                    });
                }
                return check;
            }
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
        }
    }
</script>
<style>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
```
:::


### API 

#### Upload props 


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| action | 上传的地址，必填 | String | \- |
| headers | 设置上传的请求头部 | Object | \{\} |
| multiple | 是否支持多选文件 | Boolean | false |
| data | 上传时附带的额外参数 | Object | \- |
| name | 上传的文件字段名 | String | file |
| with-credentials | 支持发送 cookie 凭证信息 | Boolean | false |
| show-upload-list | 是否显示已上传文件列表 | Boolean | true |
| type | 上传控件的类型，可选值为 `select`（点击选择），`drag`（支持拖拽） | String | select |
| accept | 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | String | \- |
| format | 支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用 | Array | \[\] |
| max-size | 文件大小限制，单位 kb | Number | \- |
| before-upload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传 | Function | \- |
| on-progress | 文件上传时的钩子，返回字段为 event, file, fileList | Function | \- |
| on-success | 文件上传成功时的钩子，返回字段为 response, file, fileList | Function | \- |
| on-error | 文件上传失败时的钩子，返回字段为 error, file, fileList | Function | \- |
| on-preview | 点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据 | Function | \- |
| on-remove | 文件列表移除文件时的钩子，返回字段为 file, fileList | Function | \- |
| on-format-error | 文件格式验证失败时的钩子，返回字段为 file, fileList | Function | \- |
| on-exceeded-size | 文件超出指定大小限制时的钩子，返回字段为 file, fileList | Function | \- |
| default-file-list | 默认已上传的文件列表，例如：``` [{ name: 'img1.jpg',url: 'http://www.xxx.com/img1.jpg' }, { name: 'img2.jpg' url:'http://www.xxx.com/img2.jpg' } ]``` | Array | \[\] |


#### Upload methods 

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| clearFiles | 清空已上传的文件列表 | 无 |


#### Upload slot 

| 名称 | 说明 |
| --- | --- |
| 无 | 触发上传组件的控件 |
| tip | 辅助提示内容 |