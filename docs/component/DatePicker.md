### DatePicker 日期选择器

### 概述 
----
选择或输入日期，支持年、月、日期等类型，支持选择范围。



#### 基础用法
-----
设置属性 `type` 为 `date` 或 `daterange` 分别显示选择单日和选择范围类型。
设置属性 `placement` 可以更改选择器出现的方向，与 `Poptip` 和 `Tooltip` 配置一致，支持 12 个方向，详见 API。


::: demo
```vue
<template>
    <f-row>
        <f-col span="12">
            <f-date-picker type="date" placeholder="选择日期" style="width: 200px"></f-date-picker>
        </f-col>
        <f-col span="12">
            <f-date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></f-date-picker>
        </f-col>
    </f-row>
</template>
<script>
    export default {
        
    }
</script>
```
:::





#### 快捷方式
---
设置属性 `options` 对象中的 `shortcuts` 可以设置快捷选项，详见示例代码。

其中 `value` 为函数，必须返回一个日期，如果是 `daterange` 类型，需要返回一个数组。

`value` 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。



::: demo
```vue
<template>
    <f-row>
        <f-col span="12">
            <f-date-picker type="date" :options="options1" placeholder="选择日期" style="width: 200px"></f-date-picker>
        </f-col>
        <f-col span="12">
            <f-date-picker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px"></f-date-picker>
        </f-col>
    </f-row>
</template>
<script>
    export default {
        data () {
            return {
                options1: {
                    shortcuts: [
                        {
                            text: '今天',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了今天');
                            }
                        },
                        {
                            text: '昨天',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了昨天');
                            }
                        },
                        {
                            text: '一周前',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了一周前');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '最近一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        }
    }
</script>
```
::: 


#### 日期格式 
---
设置属性 `format` 可以改变日期的显示格式，详见  `Date。`

注意，`format` 只是改变显示的格式，并非改变 `value` 值。

::: demo
```vue
<template>
    <f-row>
        <f-col span="12">
            <f-date-picker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></f-date-picker>
        </f-col>
        <f-col span="12">
            <f-date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></f-date-picker>
        </f-col>
    </f-row>
</template>
<script>
    export default {
        data () {
            return {
                value1: '2016-01-01',
                value2: ['2016-01-01', '2016-02-15']
            }
        }
    }
</script>
```
::: 



#### 日期时间选择 
---
设置属性 `type` 为 `datetime` 或 `datetimerange` 可以选择时间。

设置 `format` 并且忽略秒，可以只设置小时和分钟维度。


::: demo
```vue
<template>
    <f-date-picker type="datetime" placeholder="选择日期和时间" style="width: 200px"></f-date-picker>
    <br>
    <f-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px"></f-date-picker>
    <br>
    <f-date-picker type="datetimerange" placeholder="选择日期和时间" style="width: 300px"></f-date-picker>
    <br>
    <f-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 300px"></f-date-picker>
</template>
<script>
    export default {
        
    }
</script>
```
::: 


#### 年和月 
---

设置属性 `type` 为 `year` 或 `month` 可以使用选择年或月的功能。

::: demo
```vue
<template>
    <f-row>
        <f-col span="12">
            <f-date-picker type="year" placeholder="选择年" style="width: 200px"></f-date-picker>
        </f-col>
        <f-col span="12">
            <f-date-picker type="month" placeholder="选择月" style="width: 200px"></f-date-picker>
        </f-col>
    </f-row>
</template>
<script>
    export default {
        
    }
</script>
```
::: 


#### 不可选日期
---
设置属性 `options` 对象中的 `disabledDate` 可以设置不可选择的日期。

`disabledDate` 是函数，参数为当前的日期，需要返回 `Boolean` 是否禁用这天。

::: demo
```vue
<template>
    <f-row>
        <f-col span="12">
            <f-date-picker type="date" :options="options3" placeholder="选择日期" style="width: 200px"></f-date-picker>
        </f-col>
        <f-col span="12">
            <f-date-picker type="date" :options="options4" placeholder="选择日期" style="width: 200px"></f-date-picker>
        </f-col>
    </f-row>
</template>
<script>
    export default {
        data () {
            return {
                options3: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
                options4: {
                    disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    }
                }
            }
        }
    }
</script>
```
::: 

#### 带有确认操作 
---
设置属性 `confirm`，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。

确认按钮并没有影响日期的正常选择。

::: demo
```vue
<template>
    <f-row>
        <f-col span="12">
            <f-date-picker type="date" confirm placeholder="选择日期" style="width: 200px"></f-date-picker>
        </f-col>
        <f-col span="12">
            <f-date-picker type="daterange" confirm placement="bottom-end" placeholder="选择日期" style="width: 200px"></f-date-picker>
        </f-col>
    </f-row>
</template>
<script>
    export default {

    }
</script>
```
::: 


#### 尺寸 
---
通过设置属性 `size` 为 `large` 或 `small` 可以调整选择器尺寸为大或小，默认不填为中。


::: demo
```vue


<template>
    <f-row>
        <f-col span="8">
            <f-date-picker size="small" type="date" placeholder="选择日期"></f-date-picker>
        </f-col>
        <f-col span="8">
            <f-date-picker type="date" placeholder="选择日期"></f-date-picker>
        </f-col>
        <f-col span="8">
            <f-date-picker size="large" type="date" placeholder="选择日期"></f-date-picker>
        </f-col>
    </f-row>
</template>
<script>
    export default {

    }
</script>
```
:::


### API #

####  DatePicker props 


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 显示类型，可选值为, `date`,`daterange`,`datetime`,`datetimerange`,`year`,`month` | String | date |
| value | 日期，可以是 `JavaScript` 的 Date，例如 **new Date\(\)**，也可以是标准的日期格式，点击右边查看
注意：value 使用 v-model 时，值是 Date 类型，可以配合 \@on-change 使用 | Date | \- |
| format | 展示的日期格式 | date | <br/> **daterange**：yyyy-MM  <br/>**dddatetime** \| **datetimerange**：yyyy-MM-dd HH:mm:ss <br/>**year**：yyyy <br/>**month**：yyyy-MM|
| placement | 日期选择器出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end` | String | bottom-start |
| placeholder | 占位文本 | String | 空 |
| options | 选择器额外配置，比如不可选日期与快捷选项，具体项详见下表 | Object | \- |
| confirm | 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭 | Boolean | false |
| open | 手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用 | Boolean | null |
| size | 尺寸，可选值为`large`和`small`或者不设置 | String | \- |
| disabled | 是否禁用选择器 | Boolean | false |
| clearable | 是否显示清除按钮 | Boolean | true |
| readonly | 完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效 | Boolean | false |
| editable | 文本框是否可以输入，只在没有使用 slot 时有效 | Boolean | true |


#### options 

选择器额外配置

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shortcuts | 设置快捷选项，每项内容： **text \| String**：显示的文案 <br/>**value \| Function**：返回指定的日期，如需自己控制逻辑，可不设置，并使 onClick 回调 <br/>**onClick \| Function**：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用| Array | \- |
| disabledDate | 设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天 | Function | \- |


#### DatePicker events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| on-change | 日期发生变化时触发 | 已经格式化后的日期，比如 2016-01-01 |
| on-open-change | 弹出日历和关闭日历时触发 | true \| false |
| on-ok | 在 confirm 模式下有效，点击确定按钮时触发 | \- |
| on-clear | 在 confirm 模式或 clearable = true 时有效，在清空日期时触发 | \- |

