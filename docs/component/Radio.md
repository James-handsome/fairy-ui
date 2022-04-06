### Radio 单选框

#### 概述
-----
基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

### 代码示例
----


#### 单独使用
----
使用 `v-model` 可以双向绑定数据

::: demo
```vue
<template>
    <f-radio v-model="single">f-radio</f-radio>
</template>
<script>
    export default {
        data () {
            return {
                single: false
            }
        }
    }
</script>
```
::: 

#### 组合使用 
-----


使用`f-radio-group`实现一组互斥的选项组。在组合使用时，`f-radio` 使用 `label` 来自动判断。
每个 `f-radio` 的内容可以自定义，如不填写则默认使用 `label` 的值。

::: demo
```vue
<template>
    <f-radio-group v-model="phone">
        <f-radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>apple</span>
        </f-radio>
        <f-radio label="android">
            <Icon type="social-android"></Icon>
            <span>android</span>
        </f-radio>
        <f-radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>windows</span>
        </f-radio>
    </f-radio-group>
    <f-radio-group v-model="animal">
        <f-radio label="前端开发"></f-radio>
        <f-radio label="JAVA"></f-radio>
        <f-radio label="PHP"></f-radio>
    </f-radio-group>
</template>
<script>
    export default {
        data () {
            return {
                phone: 'apple',
                animal: '前端开发'
            }
        }
    }
</script>
```
::: 

#### 禁用状态
----
通过设置disabled属性来禁用单选框。


::: demo
```vue
<template>
    <f-radio v-model="disabledSingle" disabled>f-radio</f-radio>
    <f-radio-group v-model="disabledGroup">
        <f-radio label="白居易" disabled></f-radio>
        <f-radio label="李白"></f-radio>
        <f-radio label="杜甫"></f-radio>
    </f-radio-group>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: '李白'
            }
        }
    }
</script>
```
::: 

#### 按钮样式
----
组合使用时可以设置属性`type`为 `button` 来应用按钮的样式。

::: demo
```vue
<template>
   <div>
    <f-radio-group v-model="button1" type="button">
        <f-radio label="北京"></f-radio>
        <f-radio label="上海"></f-radio>
        <f-radio label="深圳"></f-radio>
        <f-radio label="杭州"></f-radio>
    </f-radio-group>
    <f-radio-group v-model="button2" type="button">
        <f-radio label="北京"></f-radio>
        <f-radio label="上海" disabled></f-radio>
        <f-radio label="深圳"></f-radio>
        <f-radio label="杭州"></f-radio>
    </f-radio-group>
    <f-radio-group v-model="button3" type="button">
        <f-radio label="北京" disabled></f-radio>
        <f-radio label="上海" disabled></f-radio>
        <f-radio label="深圳" disabled></f-radio>
        <f-radio label="杭州" disabled></f-radio>
    </f-radio-group>
   </div>
</template>
<script>
    export default {
        data () {
            return {
                button1: '北京',
                button2: '北京',
                button3: '北京'
            }
        }
    }
</script>
```
::: 


#### 尺寸
----

通过设置属性`size`为`large`或`small`将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。

::: demo
```vue
<template>
    <f-radio-group v-model="button4" type="button" size="large">
        <f-radio label="北京"></f-radio>
        <f-radio label="上海"></f-radio>
        <f-radio label="深圳"></f-radio>
        <f-radio label="杭州"></f-radio>
    </f-radio-group>
    <f-radio-group v-model="button5" type="button">
        <f-radio label="北京"></f-radio>
        <f-radio label="上海"></f-radio>
        <f-radio label="深圳"></f-radio>
        <f-radio label="杭州"></f-radio>
    </f-radio-group>
    <f-radio-group v-model="button6" type="button" size="small">
        <f-radio label="北京"></f-radio>
        <f-radio label="上海"></f-radio>
        <f-radio label="深圳"></f-radio>
        <f-radio label="杭州"></f-radio>
    </f-radio-group>
</template>
<script>
    export default {
        data () {
            return {
                button4: '北京',
                button5: '北京',
                button6: '北京'
            }
        }
    }
</script>
```
:::

### API

#### Radio props

|属性	    |说明	                                                                       |  类型	| 默认值 |
|  ----   |                                 ---                                        | ----   | ----   |
|value	  |只在单独使用时有效。可以使用 `v-model` 双向绑定数据                          |	Boolean|	false |
|label	  |只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目	   |String - Number|	- |
|disabled	|是否禁用当前项	                                                              |Boolean |	false |

#### Radio events

|事件名	|说明	| 返回值 |
|----   |---- | ----   |
|on-change |	在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发|	- |

#### RadioGroup props

|属性	    |说明	|类型	|默认值|
|  -----  |---- | ----| ---- |
|value	  |指定当前选中的项目数据。可以使用 v-model 双向绑定数据 |	String - Number |	- |
|type	    |可选值为 button 或不填，为 button 时使用按钮样式	     |String |	-  |
|size	    |尺寸，只对按钮样式生效，可选值为large和small或者不设置 |	String |	- |
|vertical	|是否垂直排列，按钮样式下无效	| Boolean |	false |

#### RadioGroup events 

|事件名	| 说明	|返回值|
| ----  | ----  | ---- |
|on-change |	在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发|	- |
