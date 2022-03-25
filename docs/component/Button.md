### Button 按钮
基础组件，触发业务逻辑时使用
#### 按钮类型
----

按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
通过设置`type`为`primary` `ghost` `dashed` `text` `info` `success` `warning` `error`
创建不同样式的按钮，不设置为默认样式

#### 示例代码
::: demo
```html
<Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="ghost">Ghost</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="text">Text</Button>
  <br><br>
  <Button type="info">Info</Button>
  <Button type="success">Success</Button>
  <Button type="warning">Warning</Button>
  <Button type="error">Error</Button>
  <br><br>
```
::: 
#### 图标按钮及按钮形状
----
通过设置`icon`属性在`Button`内嵌入一个`Icon`，或者直接在`Button`内使用`Icon`组件。
使用`Button`的`icon`属性，图标位置将在最左边，如果需要自定义位置，需使用`Icon`组件。
通过设置`shape`属性为`circle`，可将按钮置为圆的形状。

::: demo
```vue
<template>
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">搜索</Button>
    <Button type="primary" shape="circle" icon="ios-search">搜索</Button>
    <Button type="primary" shape="circle">圆角按钮</Button>
    <br><br>
    <Button type="ghost" shape="circle" icon="ios-search"></Button>
    <Button type="ghost" icon="ios-search">搜索</Button>
    <Button type="ghost" shape="circle" icon="ios-search">搜索</Button>
    <Button type="ghost" shape="circle">圆角按钮</Button>
</template>
<script>
    export default {
        
    }
</script>
```
::: 


#### 按钮尺寸
----
按钮有三种尺寸：大、默认（中）、小
通过设置`size`为`large`和`small`将按钮设置为大和小尺寸，不设置为默认（中）尺寸。

::: demo
```vue
<template>
    <Button type="primary" size="large">Large</Button>
    <Button type="primary">Default</Button>
    <Button type="primary" size="small">Small</Button>
    <br><br>
    <Button type="primary" shape="circle" size="large">Large</Button>
    <Button type="primary" shape="circle">Default</Button>
    <Button type="primary" shape="circle" size="small">Small</Button>
</template>
<script>
    export default {
        
    }
</script>

```
:::



#### 长按钮 
----
通过设置属性 `long` 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。
使用者也可以直接通过给组件添加 style 来设置更细节的样式，比如定宽。


::: demo
```vue
<template>
    <Button type="success" long>确认提交</Button>
    <br><br>
    <Button type="error" long>确认删除</Button>
</template>
<script>
    export default {
        
    }
</script>
```
:::


#### 不可用状态
----
通过添加disabled属性可将按钮设置为不可用状态。

::: demo
```vue
<template>
    <Button>Default</Button>
    <Button disabled>Default(Disabled)</Button>
    <br>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <br>
    <Button type="ghost">Ghost</Button>
    <Button type="ghost" disabled>Ghost(Disabled)</Button>
    <br>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(Disabled)</Button>
    <br>
    <Button type="text">Text</Button>
    <Button type="text" disabled>Text(Disabled)</Button>
</template>
<script>
    export default {
        
    }
</script>
```
:::


#### 加载中状态 
----
通过添加loading属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。

::: demo
```vue
<template>
    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>

```
:::


#### 按钮组合
----
将多个`Button`放入`ButtonGroup`内，可实现按钮组合的效果。
通过设置`ButtonGroup`的属性`size`为`large`和`small`，可将按钮组尺寸设置为大和小，不设置`size`，则为默认（中）尺寸。
通过设置`ButtonGroup`的属性`shape`为`circle`，可将按钮组形状设置为圆角。

::: demo
```vue
<template>
    <h4>基本</h4>
    <br><br>
    <Button-group>
        <Button>取消</Button>
        <Button type="primary">确定</Button>
    </Button-group>
    <Button-group>
        <Button disabled>昨日</Button>
        <Button disabled>今日</Button>
        <Button disabled>明日</Button>
    </Button-group>
    <Button-group>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button type="ghost">M</Button>
        <Button type="dashed">R</Button>
    </Button-group>
    <br><br>
    <h4>配合图标</h4>
    <br><br>
    <Button-group>
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </Button>
        <Button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </Button>
    </Button-group>
    <Button-group>
        <Button type="primary" icon="ios-skipbackward"></Button>
        <Button type="primary" icon="ios-skipforward"></Button>
    </Button-group>
    <Button-group>
        <Button type="ghost" icon="ios-color-wand-outline"></Button>
        <Button type="ghost" icon="ios-sunny-outline"></Button>
        <Button type="ghost" icon="ios-crop"></Button>
        <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </Button-group>
    <br><br>
    <h4>圆角</h4>
    <br><br>
    <Button-group shape="circle">
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </Button>
        <Button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </Button>
    </Button-group>
    <Button-group shape="circle">
        <Button type="primary" icon="ios-skipbackward"></Button>
        <Button type="primary" icon="ios-skipforward"></Button>
    </Button-group>
    <Button-group shape="circle">
        <Button type="ghost" icon="ios-color-wand-outline"></Button>
        <Button type="ghost" icon="ios-sunny-outline"></Button>
        <Button type="ghost" icon="ios-crop"></Button>
        <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </Button-group>
    <br><br>
    <h4>尺寸</h4>
    <br><br>
    <Button-group size="large">
        <Button type="ghost">Large</Button>
        <Button type="ghost">Large</Button>
    </Button-group>
    <Button-group>
        <Button type="ghost">Default</Button>
        <Button type="ghost">Default</Button>
    </Button-group>
    <Button-group size="small">
        <Button type="ghost">Small</Button>
        <Button type="ghost">Small</Button>
    </Button-group>
    <br><br>
    <Button-group size="large" shape="circle">
        <Button type="ghost">Large</Button>
        <Button type="ghost">Large</Button>
    </Button-group>
    <Button-group shape="circle">
        <Button type="ghost">Default</Button>
        <Button type="ghost">Default</Button>
    </Button-group>
    <Button-group size="small" shape="circle">
        <Button type="ghost">Small</Button>
        <Button type="ghost">Small</Button>
    </Button-group>
</template>
<script>
    export default {
        
    }
</script>

```
:::


### API #
#### Button props 


| 属性    |	说明                                                                                  |  类型  | 默认值 |
| ---     | ---                                                                                   | ---    |  :---  |
|type	    |按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置 | String |	  -   |
|size	    |按钮大小，可选值为large和small或者不设置                                                | String |	  -   |
|shape	  |按钮形状，可选值为circle或者不设置                                                      | String |	-     |
|long	    |开启后，按钮的长度为 100%                                                               | Boolean | false |
|htmlType	|设置button原生的type，可选值为button、submit、reset                                     | String |	button |
|disabled	|设置按钮为禁用状态                                                                      | Boolean | false |
|loading	|设置按钮为加载中状态                                                                    | Boolean | false |
|icon	    |设置按钮的图标类型                                                                      | String |	-  |

#### ButtonGroup props


|属性|	说明                                                                                            |	类型|	默认值|
| ---| ------------------------------------------------------------------------------------------------ | --- | :--- |
|size	    |按钮组合大小，可选值为large和small或者不设置	 |  String  | 	-  |
|shape	  |按钮组合形状，可选值为circle或者不设置        | 	String  |  	-   |
|vertical	|是否纵向排列按钮组                            |	Boolean |	false  |
