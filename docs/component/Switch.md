### Switch 开关

### 概述 
----
在两种状态间切换时用到的开关选择器。


#### 基本用法
----
基本用法，状态切换时会触发事件。

::: demo
```vue
<template>
    <f-switch v-model="switch1" @on-change="change"></f-switch>
</template>
<script>
    export default {
        data () {
            return {
                switch1: false
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>
```
:::


#### 尺寸
----
设置`size`为 `large` 或 `small` 使用大号和小号的开关。

::: demo
```vue
<template>
    <f-switch size="large"></f-switch>
    <f-switch></f-switch>
    <f-switch size="small"></f-switch>
</template>
<script>
    export default {
        
    }
</script>
```
:::

#### 文字和图标
----
自定义内容，建议如果使用2个汉字，将开关尺寸设置为 `large`。

::: demo
```vue
<template>
    <f-switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </f-switch>
    <f-switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
    </f-switch>
    <br><br>
    <f-switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </f-switch>
    <f-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </f-switch>
</template>
<script>
    export default {
        
    }
</script>
```
:::

#### 不可用
----
禁用开关

::: demo
```vue
<template>
    <f-switch :disabled="disabled"></f-switch>
    <Button type="primary" @click="disabled = !disabled">禁用</Button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true
            }
        },
    }
</script>
```
:::


### API

#### Switch props

|属性	|说明	|类型 |	默认值|
|---- |---- | ----| ----- |
|value	  |指定当前是否选中，可以使用 `v-model` 双向绑定数据	 |Boolean |	false |
|size	    |开关的尺寸，可选值为`large`、`small`或者不写。建议开关如果使用了2个汉字的文字，使用large |	String |	-  |
|disabled	|禁用开关	|  Boolean	| false |

#### Switch events 

|事件名 |	说明	|返回值|
|-----  | ----  | ---- |
| on-change	|开关变化时触发，返回当前的状态	| true - false|

#### Switch slot

|名称	|说明|
|---- |--- |
|open	|自定义显示打开时的内容|
|close|	自定义显示关闭时的内容|



