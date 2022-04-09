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


