### Cascader 级联选择

### 概述 
从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。
相比 Select 组件，可以一次性完成选择，体验更好。

#### 基础用法 
---
级联选择对数据有较严格要求，请参照示例的格式使用`data`，每项数据至少包含 `value`、`label` 两项，子集为 `children`，以此类推。

`value` 为当前选择的数据的 `value` 值的数组，比如 `['beijing', 'gugong']` ，按照级联顺序依次排序，使用 `v-model` 进行双向绑定。


::: demo
```vue
<template>
    <f-cascader :data="data" v-model="value1"></f-cascader>
</template>
<script>
    export default {
        data () {
            return {
                value1: [],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>
```
::: 


#### 默认值
---
指定 `value` 默认值，组件会在初始化时选定数据。


::: demo
```vue
<template>
    <f-cascader :data="data" v-model="value2"></f-cascader>
</template>
<script>
    export default {
        data () {
            return {
                value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>
```
::: 


#### 移入展开 
---
设置属性 `trigger` 为 `hover`，当鼠标悬停时就会展开子集。

::: demo
```vue
<template>
    <f-cascader :data="data" trigger="hover"></f-cascader>
</template>
<script>
    export default {
        data () {
            return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>
```
::: 


#### 自定义显示 
---

通过设置 `slot` 可以自定义显示内容，不局限于输入框。

::: demo
```vue
<template>
    {{ text }}
    <f-cascader :data="data" @on-change="handleChange">
        <a href="javascript:void(0)">选择</a>
    </f-cascader>
</template>
<script>
    export default {
        data () {
            return {
                text: '未选择',
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        },
        methods: {
            handleChange (value, selectedData) {
                this.text = selectedData.map(o => o.label).join(', ');
            }
        }
    }
</script>
```
::: 


#### 禁用 
---
设置属性 `disabled`可以禁用组件。

给某项数据设置 `disabled: true` 可以禁用某一项。

::: demo
```vue
<template>
    <f-cascader :data="data2" disabled></f-cascader>
    <f-cascader :data="data2"></f-cascader>
</template>
<script>
    export default {
        data () {
            return {
                data2: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖'
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    disabled: true,
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门'
                        }]
                    }]
                }]
            }
        }
    }
</script>
```
::: 


#### 选择即改变 
---
设置属性 `change-on-select` 点任何一级都可以选择。

::: demo
```vue
<template>
    <f-cascader :data="data" change-on-select></f-cascader>
</template>
<script>
    export default {
        data () {
            return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>
```
::: 


#### 自定义已选项 
---
对于显示的结果，可以通过 `render-format` 接收一个函数来自定义。

其中第一个参数 `labels` 是当前选择的label的集合，第二个参数 `selectedData` 是当前选择的数据集合，可以利用它们组合出你想要显示的内容。

::: demo
```vue
<template>
    <f-cascader :data="data3" :render-format="format"></f-cascader>
</template>
<script>
    export default {
        data () {
            return {
                data3: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖',
                            code: 310000
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门',
                            code: 210000
                        }]
                    }]
                }]
            }
        },
        methods: {
            format (labels, selectedData) {
                const index = labels.length - 1;
                const data = selectedData[index] || false;
                if (data && data.code) {
                    return labels[index] + ' - ' + data.code;
                }
                return labels[index];
            }
        }
    }
</script>


```
:::


#### 尺寸 
---
通过设置 `size` 属性为 `large` 和`small` 将输入框设置为大和小尺寸，不设置为默认（中）尺寸。


::: demo
```vue
<template>
    <f-cascader :data="data" size="large"></f-cascader>
    <br>
    <f-cascader :data="data"></f-cascader>
    <br>
    <f-cascader :data="data" size="small"></f-cascader>
</template>
<script>
    export default {
        data () {
            return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>
```
:::

### API #

#### Cascader props 

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 可选项的数据源，格式参照示例说明 | Array | \[\] |
| value | 当前已选项的数据，格式参照示例说明 | Array | \[\] |
| render-format | 选择后展示的函数，用于自定义显示格式 | Function | label => label.join\(' / '\) |
| disabled | 是否禁用选择器 | Boolean | false |
| clearable | 是否支持清除 | Boolean | true |
| placeholder | 输入框占位符 | String | 请选择 |
| trigger | 次级菜单展开方式，可选值为 `click` 或 `hover` | String | click |
| change-on-select | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例 | Function | value |
| size | 输入框大小，可选值为`large`和`small`或者不填 | String | \- |

#### Cascader events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| on-change | 选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据 | value, selectedData |