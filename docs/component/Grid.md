### Grid 栅格


#### 基础用法
----
水平排列的布局,
`f-col`必须放在`f-row`里面，在使用`f-col`组件时，必须加前缀，如`<f-col></f-col>`


::: demo
```vue
<template>
    <f-row>
        <f-col span="12">f-col-12</f-col>
        <f-col span="12">f-col-12</f-col>
    </f-row>
    <br>
    <f-row>
        <f-col span="8">f-col-8</f-col>
        <f-col span="8">f-col-8</f-col>
        <f-col span="8">f-col-8</f-col>
    </f-row>
    <br>
    <f-row>
        <f-col span="6">f-col-6</f-col>
        <f-col span="6">f-col-6</f-col>
        <f-col span="6">f-col-6</f-col>
        <f-col span="6">f-col-6</f-col>
    </f-row>
</template>
<script>
    export default {
        
    }
</script>
```
::: 


#### 区块间隔
----

通过给 `f-row` 添加 `gutter` 属性，可以给下属的 `f-col` 添加间距，推荐使用 (16+8n)px 作为栅格间隔。


::: demo
```vue
<template>
    <f-row :gutter="16">
        <f-col span="6">
            <div>f-col-6</div>
        </f-col>
        <f-col span="6">
            <div>f-col-6</div>
        </f-col>
        <f-col span="6">
            <div>f-col-6</div>
        </f-col>
        <f-col span="6">
            <div>f-col-6</div>
        </f-col>
    </f-row>
</template>
<script>
    export default {
        
    }
</script>

```
::: 

#### 栅格顺序Flex
----

通过 `Flex` 布局的`order`来改变栅格的顺序

::: demo
```vue

<template>
    <f-row type="flex">
        <f-col span="6" order="4">1 | order-4</f-col>
        <f-col span="6" order="3">2 | order-3</f-col>
        <f-col span="6" order="2">3 | order-2</f-col>
        <f-col span="6" order="1">4 | order-1</f-col>
    </f-row>
</template>
<script>
    export default {
        
    }
</script>
```
:::



#### 栅格排序
----
通过设置`push`和`pull`来改变栅格的顺序。

::: demo
```vue
<template>
    <f-row>
        <f-col span="18" push="6">f-col-18 | push-6</f-col>
        <f-col span="6" pull="18">f-col-6 | pull-18</f-col>
    </f-row>
</template>
<script>
    export default {
        
    }
</script>
```
:::


#### 左右偏移
----
通过设置`offset`属性，将列进行左右偏移，偏移栅格数为`offset`的值。
::: demo
```vue
<template>
    <f-row>
        <f-col span="8">f-col-8</f-col>
        <f-col span="8" offset="8">f-col-8 | offset-8</f-col>
    </f-row>
    <br>
    <f-row>
        <f-col span="6" offset="8">f-col-6 | offset-8</f-col>
        <f-col span="6" offset="4">f-col-6 | offset-4</f-col>
    </f-row>
    <br>
    <f-row>
        <f-col span="12" offset="8">f-col-12 | offset-8</f-col>
    </f-row>
</template>
<script>
    export default {
        
    }
</script>
```
:::

#### Flex布局
----
通过给`f-row`设置参数`justify`为不同的值，来定义子元素的排布方式。在`flex`模式下有效。



::: demo
```vue
<template>
    <p>子元素向左排列</p>
    <f-row type="flex" justify="start" class="code-f-row-bg">
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
    </f-row>
    <p>子元素向右排列</p>
    <f-row type="flex" justify="end" class="code-f-row-bg">
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
    </f-row>
    <p>子元素居中排列</p>
    <f-row type="flex" justify="center" class="code-f-row-bg">
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
    </f-row>
    <p>子元素等宽排列</p>
    <f-row type="flex" justify="space-between" class="code-f-row-bg">
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
    </f-row>
    <p>子元素分散排列</p>
    <f-row type="flex" justify="space-around" class="code-f-row-bg">
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
        <f-col span="4">f-col-4</f-col>
    </f-row>
</template>
<script>
    export default {
        
    }
</script>
```
:::


#### Flex对齐
----
通过给`f-row`设置参数`align`为不同的值，来定义子元素在垂直方向上的排布方式。在`flex`模式下有效。


::: demo
```vue
<template>
    <p>顶部对齐</p>
    <f-row type="flex" justify="center" align="top" class="code-f-row-bg">
        <f-col span="4"><p style="height: 80px">f-col-4</p></f-col>
        <f-col span="4"><p style="height: 30px">f-col-4</p></f-col>
        <f-col span="4"><p style="height: 100px">f-col-4</p></f-col>
        <f-col span="4"><p style="height: 60px">f-col-4</p></f-col>
    </f-row>
    <p>底部对齐</p>
    <f-row type="flex" justify="center" align="bottom" class="code-f-row-bg">
        <f-col span="4"><p style="height: 80px">f-col-4</p></f-col>
        <f-col span="4"><p style="height: 30px">f-col-4</p></f-col>
        <f-col span="4"><p style="height: 100px">f-col-4</p></f-col>
        <f-col span="4"><p style="height: 60px">f-col-4</p></f-col>
    </f-row>
    <p>居中对齐</p>
    <f-row type="flex" justify="center" align="middle" class="code-f-row-bg">
        <f-col span="4"><p style="height: 80px">f-col-4</p></f-col>
        <f-col span="4"><p style="height: 30px">f-col-4</p></f-col>
        <f-col span="4"><p style="height: 100px">f-col-4</p></f-col>
        <f-col span="4"><p style="height: 60px">f-col-4</p></f-col>
    </f-row>
</template>
<script>
    export default {
        
    }
</script>
```
:::



####  响应式布局
----
预设四个响应尺寸：`xs` `sm` `md` `lg`，详见` API `调整浏览器尺寸来查看效果。

::: demo
```vue
<template>
    <f-row>
        <f-col :xs="2" :sm="4" :md="6" :lg="8">f-col</f-col>
        <f-col :xs="20" :sm="16" :md="12" :lg="8">f-col</f-col>
        <f-col :xs="2" :sm="4" :md="6" :lg="8">f-col</f-col>
    </f-row>
</template>
<script>
    export default {
        
    }
</script>
```
:::

### API #

####  Row props

|属性  |说明  |	类型  |	默认值  |
| ---  | ---  | ---  |   ---   |
|gutter|	栅格间距，单位 px，左右平分	 | Number |	0 |
|type  |    布局模式，可选值为flex或不选，在现代浏览器下有效   |	String |	-   |
|align |    flex 布局下的垂直对齐方式，可选值为top、middle、bottom  |	String  | 	-  |
|justify    |	flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between    |	String | - |
|class-name |	自定义的class名称     |	String	| - |

#### Col props

|属性  |说明   |	类型  |	默认值  |
| :---  | ---  |   :-----    |   ---   |
|span	|栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none |	Number - String |	- |
|order	|栅格的顺序，在flex布局模式下有效	| Number - String | - |
|offset	|栅格左侧的间隔格数，间隔内不可以有栅格	| Number - String | - |
|push	|栅格向右移动格数	| Number - String |	-|
|pull	|栅格向左移动格数	| Number - String |	-|
|class-name | 自定义的class名称 |	String  |	-  |
|xs	|`<768px` 响应式栅格，可为栅格数或一个包含其他属性的对象|	Number - Object	|-|
|sm	|`≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象|	Number - Object	|-|
|md	|`≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象|	Number - Object	|-|
|lg	|`≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象|	Number - Object	|-|

