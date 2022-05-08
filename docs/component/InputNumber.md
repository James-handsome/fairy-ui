### InputNumber 数字输入框

### 概述 
---
使用鼠标或键盘输入一定范围的标准数值。


#### 基本用法
---


::: demo
```vue
<template>
    <f-input-number :max="10" :min="1" v-model="value1"></f-input-number>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1
            }
        }
    }
</script>
```
::: 



#### 小数 
----

通过设置 `step` 属性控制每次改变的精度。

::: demo
```vue
<template>
    <f-input-number :max="10" :min="1" :step="1.2" v-model="value2"></f-input-number>
</template>
<script>
    export default {
        data () {
            return {
                value2: 1
            }
        }
    }
</script>
```
:::

#### 尺寸 
---
通过设置 `size` 属性为 `large` 和 `small` 将输入框设置为大和小尺寸，不设置为默认（中）尺寸。


::: demo
```vue
<template>
    <f-input-number v-model="value3" size="small"></f-input-number>
    <f-input-number v-model="value4"></f-input-number>
    <f-input-number v-model="value5" size="large"></f-input-number>
</template>
<script>
    export default {
        data () {
            return {
                value3: 2,
                value4: 2,
                value5: 2
            }
        }
    }
</script>
```
:::


#### 不可用 
---
通过设置 `disabled` 属性禁用输入框，点击按钮切换状态。

::: demo
```vue
<template>
    <f-input-number v-model="value6" :disabled="disabled"></f-input-number>
    <f-button type="primary" @click="disabled = !disabled">Toggle Disabled</f-button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true,
                value6: 1
            }
        }
    }
</script>
```
:::


### API #
#### InputNumber props 

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max | 最大值 | Number | Infinity |
| min | 最小值 | Number | \-Infinity |
| value | 当前值，可以使用 v-model 双向绑定数据 | Number | 1 |
| step | 每次改变的步伐，可以是小数 | Number | 1 |
| size | 输入框尺寸，可选值为`large`和`small`或者不填 | String | \- |
| disabled | 设置禁用状态 | Boolean | false |

#### InputNumber events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| on-change | 数值改变时的回调，返回当前值 | 当前值 |

