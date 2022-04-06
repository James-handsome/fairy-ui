### Select 选择器

### 概述 
----
当选项过多时，使用下拉菜单展示并选择内容。


#### 基本用法
----

基本用法。可以使用 v-model 双向绑定数据。
单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据`Option`的value来返回选中的数据。
可以给`Select`添加 style 样式，比如宽度。

::: demo
```vue
<template>
    <f-select v-model="model1" style="width:200px">
        <f-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</f-option>
    </f-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: ''
            }
        }

    }
</script>
```
:::

#### 尺寸
-----
通过设置`size`属性为`large`和`small`将输入框设置为大和小尺寸，不设置为默认（中）尺寸

::: demo
```vue
<template>
    <f-select v-model="model2" size="small" style="width:200px">
        <f-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</f-option>
    </f-select>
    <f-select v-model="model3" style="width:200px">
        <f-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</f-option>
    </f-select>
    <f-select v-model="model4" size="large" style="width:200px">
        <f-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</f-option>
    </f-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model2: '',
                model3: '',
                model4: ''
            }
        }
    }
</script>
```
:::


#### 禁用
----
通过给`Select`设置属性`disabled`禁用整个选择器。
通过给`Option`设置属性`disabled`可以禁用当前项。

::: demo
```vue
<template>
    <f-select v-model="model5" disabled style="width:200px">
        <f-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</f-option>
    </f-select>
    <f-select v-model="model6" style="width:200px">
        <f-option value="beijing">北京市</f-option>
        <f-option value="shanghai" disabled>上海市</f-option>
        <f-option value="shenzhen">深圳市</f-option>
    </f-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model5: '',
                model6: ''
            }
        }
    }
</script>


```
:::


#### 可清空
----
通过设置属性`clearable`可以清空已选项，仅适用于单选模式。


::: demo
```vue
<template>
    <f-select v-model="model8" clearable style="width:200px">
        <f-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</f-option>
    </f-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model8: ''
            }
        }
    }
</script>
```
:::



#### 分组
----
使用`Option-group`可将选项进行分组


::: demo
```vue
<template>
    <f-select v-model="model7" style="width:200px">
        <f-option-group label="热门城市">
            <f-option v-for="(item,index) in cityList1" :value="item.value" :key="index">{{ item.label }}</f-option>
        </f-option-group>
        <f-option-group label="其它城市">
            <f-option v-for="(item,index) in cityList2" :value="item.value" :key="index">{{ item.label }}</f-option>
        </f-option-group>
    </f-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                cityList1: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    }
                ],
                cityList2: [
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model7: ''
            }
        }
    }
</script>
```
:::


#### 自定义模板 
-----
对选项内容可以进行自定义。注意在 `Option`中使用`label`属性，可以让选择器优先读取该属性的值以显示，
否则选中时显示的内容会和自定义的一样，这往往不是我们想要的。对于选项显示内容的逻辑：优先显示 `slot` 内容，
如果没有定义 `slot`，则显示`label`的值，如果没有设置 `label`，则显示`value`的值

::: demo
```vue
<template>
    <f-select v-model="model9" style="width:200px">
        <f-option value="beijing" label="北京市">
            <span>北京</span>
            <span style="float:right;color:#ccc">Beiing</span>
        </f-option>
        <f-option value="shanghai" label="上海市">
            <span>上海</span>
            <span style="float:right;color:#ccc">ShangHai</span>
        </f-option>
        <f-option value="shenzhen" label="深圳市">
            <span>深圳</span>
            <span style="float:right;color:#ccc">ShenZhen</span>
        </f-option>
    </f-select>
</template>
<script>
    export default {
        data () {
            return {
                model9: ''
            }
        }
    }
</script>
```
:::


#### 多选
-----
通过设置属性`multiple`可以开启多选模式。多选模式下，`model`接受数组类型的数据，所返回的也是数组。

::: demo
```vue
<template>
    <f-select v-model="model10" multiple style="width:260px">
        <f-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</f-option>
    </f-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model10: []
            }
        }
    }
</script>
```
:::


#### 可搜索
----
通过设置属性`filterable`可以开启搜索模式。单选和多选都支持搜索模式。多选搜索时，可以使用键盘`Delete`快捷删除最后一个已选项

::: demo
```vue
<template>
    <f-row>
        <f-col span="12" style="padding-right:10px">
            <f-select v-model="model11" filterable>
                <f-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</f-option>
            </f-select>
        </f-col>
        <f-col span="12">
            <f-select v-model="model12" filterable multiple>
                <f-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</f-option>
            </f-select>
        </f-col>
    </f-row>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model11: '',
                model12: []
            }
        }
    }
</script>
```
:::