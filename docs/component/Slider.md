### Slider 滑块

### 概述
---- 
滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。



#### 基本用法
----

滑块的基本用法，可以使用 `v-model` 双向绑定数据。
通过设置属性 `range` 开启双滑块，通过设置属性 `disable` 禁用滑块。
注意，单滑块时，value 格式为数字，当开启双滑块时，value 为长度是2的数组，且每项为数字。


::: demo
```vue
<template>
    <f-slider v-model="value1"></f-slider>
    <f-slider v-model="value2" range></f-slider>
    <f-slider v-model="value3" range disabled></f-slider>
</template>
<script>
    export default {
        data () {
            return {
                value1: 20,
                value2: [20, 40],
                value3: [20, 50]
            }
        }
    }
</script>
```
:::


#### 离散值 
----
通过设置属性 `step` 可以控制每次滑动的间隔。

::: demo
```vue
<template>
    <f-slider v-model="value4" :step="10"></f-slider>
    <f-slider v-model="value5" :step="10" range></f-slider>
</template>
<script>
    export default {
        data () {
            return {
                value4: 30,
                value5: [20, 50]
            }
        }
    }
</script>
```
:::


#### 显示间断点
-----
通过设置属性 `show-stops` 可以显示间断点，建议在 `step` 间隔不密集时使用


::: demo
```vue
<template>
    <f-slider v-model="value6" :step="10" show-stops></f-slider>
    <f-slider v-model="value7" :step="10" show-stops range></f-slider>
</template>
<script>
    export default {
        data () {
            return {
                value6: 30,
                value7: [20, 50]
            }
        }
    }
</script>
```
:::

#### 带有输入框
------
通过设置属性 show-input 可以显示数字输入框，配合使用，仅在单滑块模式下有效。


::: demo
```vue
<template>
    <f-slider v-model="value8" show-input></f-slider>
</template>
<script>
    export default {
        data () {
            return {
                value8: 25
            }
        }
    }
</script>
```
:::


#### 自定义提示
-----
`Slider` 会把当前值传给 `tip-format`，并在 Tooltip 中显示 `tip-format` 的返回值，若为 null，则隐藏 `Tooltip`


::: demo
```vue
<template>
    <f-slider v-model="value9" :tip-format="format"></f-slider>
    <f-slider v-model="value10" :tip-format="hideFormat"></f-slider>
</template>
<script>
    export default {
        data () {
            return {
                value9: 25,
                value10: 25
            }
        },
        methods: {
            format (val) {
                return '进度' + val + '%';
            },
            hideFormat () {
                return null;
            }
        }
    }
</script>
```
:::


### API 
----

#### Sliderprops

|属性	   | 说明	 | 类型	 |默认值|
|-----   | ----- | ------| ---- |
|value	 |   滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字	| Number \| Array |	0 |
|min	     |最小值	|Number|	0  |
|max	     |最大值	|Number|	100|
|step	     |步长，取值建议能被（max - min）整除	| Number |	1  |
|disabled	 |是否禁用滑块 |	Boolean	| false |
|range	   |是否开启双滑块模式	| Boolean	|false |
|show-input	|是否显示数字输入框，仅在单滑块模式下有效	| Boolean	|false|
|show-stops	|是否显示间断点，建议在 step 不密集时使用	| Boolean	|false|
|show-tip	  |提示的显示控制，可选值为 `hover`（悬停，默认）、`always`（总是可见）、`never`（不可见）|	Boolean	| false |
|tip-format	|Slider 会把当前值传给 `tip-format`，并在 `Tooltip` 中显示 `tip-format` 的返回值，若为 null,则隐藏 Tooltip |	Function |value |

#### Sliderevents

|事件名	|说明	|返回值|
|-----  | ----|----  |
|on-change	|在松开滑动时触发，返回当前的选值，在滑动过程中不会触发 |	value |
|on-input	  |滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发	|value|









