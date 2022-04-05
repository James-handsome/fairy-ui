### Table 表格


### 概述 
----
主要用于展示大量结构化数据。
支持排序、筛选、分页、自定义操作、导出 csv 等复杂功能。


#### 基础用法
----

表格的最简单用法


::: demo
```vue
<template>
    <Table :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
```
:::


#### 斑马纹
-----
设置属性 `stripe` ，表格会间隔显示不同颜色，用于区分不同行数据。


::: demo
```vue
<template>
    <Table stripe :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
```
:::


#### 带边框 
-----
添加表格的边框线。

::: demo
```vue
<template>
    <Table border :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
```
:::


#### 固定表头
-----
通过设置属性 height 给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用。

::: demo
```vue
<template>
   <div>
    <Table height="200" :columns="columns1" :data="data2"></Table>
   </div>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data2: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
```
:::


#### 单选
-----
通过设置属性 `highlight-row`，可以选中某一行。
当选择时，触发事件 `@on-current-change`，可以自定义操作，事件返回两个值 `currentRow` 和 `oldCurrentRow`，分别为当前行的数据和上一次选择的数据。
通过给 `columns` 数据设置一项，指定 `type`: `index`，可以自动显示一个从 1 开始的索引列。
给 `data` 项设置特殊 `key _highlight`: `true` 可以默认选中当前项。

::: demo
```vue
<template>
    <Table highlight-row :columns="columns3" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
```
:::


#### 多选
-----
通过给 `columns` 数据设置一项，指定 `type`: '`selection`'，即可自动开启多选功能。
给 `data` 项设置特殊 `key _checked`: `true` 可以默认选中当前项。
给 `data` 项设置特殊 `key _disabled`: `true` 可以禁止选择当前项。
正确使用好以下事件，可以达到需要的效果：
`@on-select`，选中某一项触发，返回值为 `selection` 和 `row`，分别为已选项和刚选择的项。
`@on-select-all`，点击全选时触发，返回值为 `selection`，已选项。
`@on-selection-change`，只要选中项发生变化时就会触发，返回值为 `selection`，已选项。

::: demo
```vue
<template>
    <Table border :columns="columns4" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
```
:::


#### 排序
-----
通过给 `columns` 数据的项，设置 `sortable`: `true`，即可对该列数据进行排序。

排序默认使用升序和降序，也可以通过设置属性 `sortMethod`指定一个自定义排序函数，接收三个参数 `a` 、 `b` 和 `type`。

如果使用远程排序，可以设置 `sortable`： `'custom'`，然后在触发排序事件 `@on-sort-change`后，进行远程排序，并手动设置新的 `data`，详见 API。

注意，排序并不会影响到源数据 data。

::: demo
```vue
<template>
    <Table border :columns="columns5" :data="data5"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns5: [
                    {
                        title: '日期',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data5: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        date: '2016-10-01'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        date: '2016-10-02'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>
```
:::

### API 

#### Table props

|属性	|说明	| 类型 |	默认值  |
| ----  | ----  | ---- |  -------   |
|data	       | 显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例特定样式。|Array |[]|
|columns	   |表格列的配置描述，具体项见后文	 | Array|	[] |
|stripe 	   | 是否显示间隔斑马纹   |	Boolean |	false |
|border	       | 是否显示纵向边框	  |Boolean	|   false |
|show-header   | 是否显示表头	      |Boolean	|   true  |
|width	        | 表格宽度，单位 px	  |   Number-String	| 自动 |
|height	        | 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头 | 	Number -String |	-  |
|highlight-row  | 是否支持高亮选中的行，即单选  |	Boolean	 | false |
|row-class-name	|行的 `className`的回调方法，传入参数：`row`：当前行数据,`index`当前行的索引  | Function |	- |  
|size	        |表格尺寸，可选值为 large、small、default 或者不填|	String |	- |
|context	    |设置单元格内渲染自定义组件时的上下文。比如父级是 `$parent`，根组件是 `$root`，当 `Table` 作为一个 `slot` 封装在其它组件里时，会很有用  |   Object	| Table所在的上下文 |
|no-data-text	|         数据为空时显示的提示内容	    |String|	    暂无数据     |
|no-filtered-data-text	|筛选数据为空时显示的提示内容	| String  | 	暂无筛选结果 |



#### Table events 


|事件名	 | 说明	|返回值|
| -----  | -----| -----|
|on-current-change	|开启 `highlight-row` 后有效，当表格的当前行发生变化的时候会触发|	`currentRow`:当前高亮行的数据 - `oldCurrentRow`:上一次高亮的数据|
|on-select	        |在多选模式下有效，选中某一项时触发	| `selection`:已选项数据 `row`:刚选择的项数据 |
|on-select-all	    |在多选模式下有效，点击全选时触发 |	`selection`:已选项数据 |
|on-selection-change|	在多选模式下有效，只要选中项发生变化时就会触发  |	`selection`:已选项数据 |
|on-sort-change	    |排序时有效，当点击排序时触发 |	`column`:当前列数据 `key`:排序依据的指标 `order`:排序的顺序，值为 `asc` 或 `desc`|
|on-row-click	    |单击某一行时触发 |	当前行的数据 |
|on-row-dblclick	| 双击某一行时触发	| 当前行的数据 |


#### Table slot 
|Table  |slot|  ----  |
|---    |----|  ----  |
|名称	|说明|  ----- |
|header	|表头|  ----  |
|footer |页脚|  ----  |

#### column

|属性	      |说明	                                  |   类型	 |          默认值            |
| --------    |    -----------                        |  -----   |      --------------       |
|title	      |列头显示文字	 | String|	# |
|key	      |对应列内容的字段名  | String	| - |
|width	      |列宽	| Number |	-  |
|align	      |对齐方式，可选值为 left 左对齐、right 右对齐和 center 居中对齐	| String |	left |
|className	  |列的样式名称	 | String |	- |
|fixed	      |列是否固定在左侧或者右侧，可选值为 left 左侧和 right 右侧	| String |  -  |
|ellipsis	  |开启后，文本将不换行，超出部分显示为省略号	|  Boolean | false |
|render	      |自定义渲染列，传入三个参数 row、column 和 index，分别指当前单元格数据，当前列数据，当前是第几行，详见示例  |	Function |	- |
|renderHeader |自定义列头显示内容，传入参数有两个，column 和 index，分别为当前列数据和当前列索引，不支持渲染自定义组件	  | Function |	-  |
|sortable	  |对应列是否可以排序，如果设置为 custom，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件	     | Boolean	 |false|
|sortMethod	  |自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 sortable: true 时有效。type 值为 asc 和 desc	 | Function  |	-  |
|filters	  |过滤数据的选项，格式为数组，数组中每项包含 label 和 value 属性，使用过滤，必须同时配置 filterMethod	     |Array     |	-  |
|filterMethod |数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示	             |Function	 |-    |
|filterMultipl|数据过滤的选项是否多选	| Boolean |	true |
|filteredValue|在初始化时使用过滤，数组，值为需要过滤的 value 集合	| Array |	-   |


