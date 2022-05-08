### Rate 评分

#### 概述 
---
对事物进行快速的评级操作，或对评价进行展示。

#### 基础用法 
---
基本用法


::: demo
```vue
<template>
    <f-rate v-model="value"></f-rate>
</template>
<script>
    export default {
        data () {
            return {
                value: 0
            }
        }
    }
</script>
```
::: 

#### 半星 
---
设置属性 `allow-half` 可以选中半星。

::: demo
```vue
<template>
    <f-rate allow-half v-model="valueHalf"></f-rate>
</template>
<script>
    export default {
        data () {
            return {
                valueHalf: 2.5
            }
        }
    }
</script>
```
::: 

#### 显示提示 
设置属性 `show-text` 可以显示提示文字。

提示内容也可以通过 `slot` 自定义。

::: demo
```vue
<template>
    <f-row>
        <f-col span="12">
            <f-rate show-text v-model="valueText"></f-rate>
        </f-col>
        <f-col span="12">
            <f-rate show-text v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </f-rate>
        </f-col>
    </f-row>
</template>
<script>
    export default {
        data () {
            return {
                valueText: 3,
                valueCustomText: 3.8
            }
        }
    }
</script>
```
:::

#### 只读 
---
设置属性 `disabled` 开启只读模式，无法交互。

::: demo
```vue
<template>
    <f-rate disabled v-model="valueDisabled"></f-rate>
</template>
<script>
    export default {
        data () {
            return {
                valueDisabled: 2
            }
        }
    }
</script>
```
:::


### API 

#### Rate props 


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| count | star 总数 | Number | 5 |
| value | 当前 star 数，可以使用 v-model 双向绑定数据 | Number | 0 |
| allow-half | 是否允许半选 | Boolean | false |
| disabled | 是否只读，无法进行交互 | Boolean | false |
| show-text | 是否显示提示文字 | Boolean | false |


#### Rate events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| on-change | 评分改变时触发 | value |

