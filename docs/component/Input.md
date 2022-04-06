### Input 输入框

#### 概述 
----
基本表单组件，支持 `f-input` 和 `textarea`，并在原生控件基础上进行了功能扩展，可以组合使用。

### 代码示例
----
#### 基础用法
----
基本用法，可以使用 `v-model` 实现数据的双向绑定。可以直接设置 `style` 来改变输入框的宽度，默认 100%


::: demo
```vue
<template>
    <f-input v-model="value" placeholder="请输入..." style="width: 300px"></f-input>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>
```
::: 

#### 尺寸
----
输入框有三种尺寸：大、默认（中）、小
通过设置`size`为`large`和`small`设置为大和小尺寸，不设置为默认（中）尺寸。

::: demo
```vue
<template>
   <div style="display:flex">
    <f-input v-model="value1" size="large" placeholder="large size"></f-input>
    <f-input v-model="value2" placeholder="default size"></f-input>
    <f-input v-model="value3" size="small" placeholder="small size"></f-input>
   </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                value2: '',
                value3: ''
            }
        }
    }
</script>
```
:::


#### 带Icon的输入框
----
通过 `icon` 属性可以在输入框右边加一个图标,点击图标，会触发 `on-click` 事件

::: demo
```vue
<template>
    <f-input v-model="value4" icon="ios-clock-outline" @on-change="onchange"	  placeholder="请输入..." style="width: 200px"></f-input>
</template>
<script>
    export default {
        data () {
            return {
                value4: ''
            }
        },
        methods:{
          onchange(val){
            console.log(val)
          }
        }
    }
</script>
```
:::

#### 文本域
----
通过设置属性 `type` 为 `textarea` 来使用文本域，用于多行输入。
通过设置属性 `rows` 控制文本域默认显示的行数。

::: demo
```vue
<template>
   <div style="display:flex">
    <f-input v-model="value7" type="textarea" :autosize="true" placeholder="请输入..."></f-input>
    <f-input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></f-input>
   </div>
</template>
<script>
    export default {
        data () {
            return {
                value7: '',
                value8: ''
            }
        }
    }
</script>
```
:::

#### 禁用状态
-----
通过添加`disabled`属性可设置为不可用状态。

::: demo
```vue
<template>
    <f-input v-model="value9" disabled placeholder="请输入..."></f-input>
    <f-input v-model="value10" disabled type="textarea" placeholder="请输入..."></f-input>
</template>
<script>
    export default {
        data () {
            return {
                value9: '',
                value10: ''
            }
        }
    }
</script>
```
:::

#### 复合型输入框
-----
通过前置和后置的 `slot` 可以实现复合型的输入框。

::: demo
```vue

<template>
    <f-input v-model="value11">
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
    </f-input>
    <br>
    <f-input v-model="value12">
        <f-select v-model="select1" slot="prepend" style="width: 80px">
            <f-option value="http">http://</f-option>
            <f-option value="https">https://</f-option>
        </f-select>
        <f-select v-model="select2" slot="append" style="width: 70px">
            <f-option value="com">.com</f-option>
            <f-option value="org">.org</f-option>
            <f-option value="io">.io</f-option>
        </f-select>
    </f-input>
    <br>
    <f-input v-model="value13">
        <f-select v-model="select3" slot="prepend" style="width: 80px">
            <f-option value="day">日活</f-option>
            <f-option value="month">月活</f-option>
        </f-select>
        <f-button slot="append" icon="ios-search"></f-button>
    </f-input>
</template>
<script>
    export default {
        data () {
            return {
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        }
    }
</script>

```
:::

### API

#### Input props

|属性     |	说明	                                                                  | 类型   | 	默认值|
| ---     | ---                                                                     | ---   |  :---  |
|type	       | 输入框类型，可选值为 text、password 或 textarea	                    | String |  text  |
|value	     | 绑定的值，可使用 v-model 双向绑定	                                  | String - Number | 	空  |
|size	       | 输入框尺寸，可选值为large和small或者不设置	                           | String	|   -    |
|placeholder | 占位文本	                                                            |String	  |  -  |
|disabled	   | 设置输入框为禁用状态	                                                | Boolean |	false|
|readonly	   | 设置输入框为只读	                                                    |Boolean	| false|
|maxlength	 | 最大输入长度	                                                        | Number	|  -   |
|icon	       | 输入框尾部图标，仅在 text 类型下有效	                                 | String |  	-   |
|rows	       | 文本域默认行数，仅在 textarea 类型下有效	                             | Number |	2  |
|autosize	   | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }	| Boolean-Object |	false |
|number	     | 将用户的输入转换为 Number 类型	                                       |  Boolean	| false |

#### Input events

|事件名|说明|	返回值|
| ---  | --- | ---   |
|on-enter	|按下回车键时触发	|无|
|on-click	|设置 icon 属性后，点击图标时触发	|无|
|on-change	|数据改变时触发	|event|
|on-focus	|输入框聚焦时触发	|无|
|on-blur	|输入框失去焦点时触发	|无|


#### Input slot

|名称	|说明|
| ----|----|
|prepend|	前置内容，仅在 text 类型下有效|
|append	|后置内容，仅在 text 类型下有效|
