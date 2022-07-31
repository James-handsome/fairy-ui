### Alert 警告提示


####  概述 
---
静态地呈现一些警告信息，可手动关闭。

#### 基础用法 
----
基本使用方法，有四种样式可以选择 `info`、`success`、`warning`、`error`。


::: demo
```vue
<template>
    <Alert>消息提示文案</Alert>
    <Alert type="success">成功提示文案</Alert>
    <Alert type="warning">警告提示文案</Alert>
    <Alert type="error">错误提示文案</Alert>
</template>
<script>
    export default {
        
    }
</script>

```
:::



#### 含描述信息 
----

自定义```<slot name="desc">```描述内容。


::: demo
```vue
<template>
    <Alert>
        消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="success">
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning">
        警告提示文案
        <template slot="desc">
            警告的提示描述文案警告的提示描述文案警告的提示描述文案
        </template>
    </Alert>
    <Alert type="error">
        错误提示文案
        <span slot="desc">
            自定义错误描述文案。<Icon type="help-circled" size="14"></Icon>
        </span>
    </Alert>
</template>
<script>
    export default {
        
    }
</script>
```
:::





#### 图标 
---
根据 `type` 属性自动添加不同图标，或者自定义图标 `slot` 。


::: demo
```vue
<template>
    <Alert show-icon>消息提示文案</Alert>
    <Alert type="success" show-icon>成功提示文案</Alert>
    <Alert type="warning" show-icon>警告提示文案</Alert>
    <Alert type="error" show-icon>错误提示文案</Alert>
    <Alert show-icon>
        消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="success" show-icon>
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning" show-icon>
        警告提示文案
        <template slot="desc">
            警告的提示描述文案警告的提示描述文案警告的提示描述文案
        </template>
    </Alert>
    <Alert type="error" show-icon>
        错误提示文案
        <span slot="desc">
            自定义错误描述文案。
        </span>
    </Alert>
    <Alert show-icon>
        自定义图标
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
    </Alert>
</template>
<script>
    export default {
        
    }
</script>
```
:::


#### 可关闭 
----
显示关闭按钮，点击可关闭提示，也可以自定义关闭 `slot` 。


::: demo
```vue
<template>
    <Alert closable>消息提示文案</Alert>
    <Alert type="success" show-icon closable>
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning" closable>
        自定义关闭内容
        <span slot="close">不再提示</span>
    </Alert>
</template>
<script>
    export default {
        
    }
</script>
```
:::

#### 顶部公告 
----
设置属性 `banner` 可以应用顶部公告的样式。

::: demo
```vue
<template>
    <Alert banner type="warning">通知：通知内容。。。</Alert>
    <Alert banner closable type="warning">通知：通知内容。。。</Alert>
</template>
<script>
    export default {
        
    }
</script>
```
:::



### API


#### Alert props 


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 警告提示样式，可选值为`info`、`success`、`warning`、`error` | String | info |
| closable | 是否可关闭 | Boolean | false |
| show-icon | 是否显示图标 | Boolean | false |



#### Alert events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| on-close | 关闭时触发 | event |



#### Alert slot

| 名称 | 说明 |
| --- | --- |
| 无 | 警告提示内容 |
| desc | 警告提示辅助性文字介绍 |
| icon | 自定义图标内容 |
| close | 自定义关闭内容 |

