### Form 表单


### 概述
---
具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。


####  行内表单
---

设置属性 `inline`，表单元素可以水平排列


::: demo
```vue

<template>
    <f-form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <f-form-item prop="user">
            <f-input type="text" v-model="formInline.user" placeholder="Username">
            </f-input>
        </f-form-item>
        <f-form-item prop="password">
            <f-input type="password" v-model="formInline.password" placeholder="Password">
            </f-input>
        </f-form-item>
        <f-form-item>
            <f-button type="primary" @click="handleSubmit('formInline')">登录</f-button>
        </f-form-item>
    </f-form>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>


```
:::


#### 表单控件
---
在 `Form` 内，每个表单域由 `f-form-item` 组成，可包含的控件有：`Input`、`Radio`、`Checkbox`、`Switch`、`Select`、`Slider`、`DatePicker`、`TimePicker`、`Cascader`、`Transfer`、`InputNumber`、`Rate`、`Upload`。
给 `Form-item` 设置属性 `label` 可以显示表单域的标签，需要给 `Form` 设置 `label-width`



::: demo
```vue

<template>
    <f-form :model="formItem" :label-width="80" ref="formRef">
        <f-form-item label="输入框">
            <f-input v-model="formItem.input" placeholder="请输入"></f-input>
        </f-form-item>
        <f-form-item label="选择器">
            <f-select v-model="formItem.select" placeholder="请选择">
                <f-option value="beijing">北京市</f-option>
                <f-option value="shanghai">上海市</f-option>
                <f-option value="shenzhen">深圳市</f-option>
            </f-select>
        </f-form-item>
        <f-form-item label="日期控件">
            <f-row>
                <f-col span="11">
                    <f-date-picker type="date" placeholder="选择日期" v-model="formItem.date"></f-date-picker>
                </f-col>
                <f-col span="2" style="text-align: center">-</f-col>
                <f-col span="11">
                    <f-time-picker type="time" placeholder="选择时间" v-model="formItem.time"></f-time-picker>
                </f-col>
            </f-row>
        </f-form-item>
        <f-form-item label="单选框">
            <f-radio-group v-model="formItem.radio">
                <f-radio label="male">男</f-radio>
                <f-radio label="female">女</f-radio>
            </f-radio-group>
        </f-form-item>
        <f-form-item label="多选框">
            <f-checkbox-group v-model="formItem.checkbox">
                <f-checkbox label="吃饭"></f-checkbox>
                <f-checkbox label="睡觉"></f-checkbox>
                <f-checkbox label="跑步"></f-checkbox>
                <f-checkbox label="看电影"></f-checkbox>
            </f-checkbox-group>
        </f-form-item>
        <f-form-item label="开关">
            <f-switch v-model="formItem.switch" size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </f-switch>
        </f-form-item>
        <f-form-item label="滑块">
            <f-slider v-model="formItem.slider" range></f-slider>
        </f-form-item>
        <f-form-item label="文本域">
            <f-input 
              v-model="formItem.textarea" 
              type="textarea" 
              :autosize="{minRows: 2,maxRows: 5}"
              placeholder="请输入...">
             </f-input>
        </f-form-item>
        <f-form-item>
            <f-button type="primary" @click="handleSubmit('formRef')">提交</f-button>
            <f-button type="ghost" style="margin-left: 8px">取消</f-button>
        </f-form-item>
    </f-form>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        },
        methods: {
           handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log('提交成功!')
                    } else {
                        this.$Message.error('表单验证失败!');
                        console.log('表单验证失败');
                    }
                })
            }
        },
    }
</script>

```
:::



#### 表单验证
---
Form 组件基于  `async-validator` 实现的数据验证，给 `Form` 设置属性 `rules`，同时给需要验证的 `Form-item` 设置属性 `prop` 指向对于字段即可。
完整的验证规则请参照开源项目 `async-validator`。


::: demo
```vue

<template>
    <f-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <f-form-item label="姓名" prop="name">
            <f-input v-model="formValidate.name" placeholder="请输入姓名"></f-input>
        </f-form-item>
        <f-form-item label="邮箱" prop="mail">
            <f-input v-model="formValidate.mail" placeholder="请输入邮箱"></f-input>
        </f-form-item>
        <f-form-item label="城市" prop="city">
            <f-select v-model="formValidate.city" placeholder="请选择所在地">
                <f-option value="beijing">北京市</f-option>
                <f-option value="shanghai">上海市</f-option>
                <f-option value="shenzhen">深圳市</f-option>
            </f-select>
        </f-form-item>
        <f-form-item label="选择日期">
            <f-row>
                <f-col span="11">
                    <f-form-item prop="date">
                        <f-date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></f-date-picker>
                    </f-form-item>
                </f-col>
                <f-col span="2" style="text-align: center">-</f-col>
                <f-col span="11">
                    <f-form-item prop="time">
                        <f-time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></f-time-picker>
                    </f-form-item>
                </f-col>
            </f-row>
        </f-form-item>
        <f-form-item label="性别" prop="gender">
            <f-radio-group v-model="formValidate.gender">
                <f-radio label="male">男</f-radio>
                <f-radio label="female">女</f-radio>
            </f-radio-group>
        </f-form-item>
        <f-form-item label="爱好" prop="interest">
            <f-checkbox-group v-model="formValidate.interest">
                <f-checkbox label="吃饭"></f-checkbox>
                <f-checkbox label="睡觉"></f-checkbox>
                <f-checkbox label="跑步"></f-checkbox>
                <f-checkbox label="看电影"></f-checkbox>
            </f-checkbox-group>
        </f-form-item>
        <f-form-item label="介绍" prop="desc">
            <f-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></f-input>
        </f-form-item>
        <f-form-item>
            <f-button type="primary" @click="handleSubmit('formValidate')">提交</f-button>
            <f-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</f-button>
        </f-form-item>
    </f-form>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>



```
:::




#### 自定义验证 
---

可以完全自定义验证规则来完成更复杂的验证，比如某些数据需要在服务端验证时。示例展示的是密码的二次确认及模拟的一个异步验证。


::: demo
```vue
<template>
    <f-form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <f-form-item label="密码" prop="passwd">
            <f-input type="password" v-model="formCustom.passwd"></f-input>
        </f-form-item>
        <f-form-item label="确认密码" prop="passwdCheck">
            <f-input type="password" v-model="formCustom.passwdCheck"></f-input>
        </f-form-item>
        <f-form-item label="年龄" prop="age">
            <f-input type="text" v-model="formCustom.age" number></f-input>
        </f-form-item>
        <f-form-item>
            <f-button type="primary" @click="handleSubmit('formCustom')">提交</f-button>
            <f-button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</f-button>
        </f-form-item>
    </f-form>
</template>
<script>
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    age: [
                        { validator: validateAge, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
```
:::


#### 动态增减表单项 
当需要动态维护 `Form-item` 时，也可以直接给 `Form-item` 设置属性 `rules` 来单独为该域做验证。

动态设置 `Form-item` 的 `prop` 属性时，会依据上层的 `Form` 组件的 `model` 来获取，查看示例代码。

`Form-item` 还可以独立设置 `required`、`error` 等属性，详见 API。



::: demo
```vue

<template>
    <f-form ref="formDynamic" :model="formDynamic" :label-width="80">
        <f-form-item
            v-for="(item, index) in formDynamic.items"
            :key="index"
            :label="'项目' + (index + 1)"
            :prop="'items.' + index + '.value'"
            :rules="{required: true, message: '项目' + (index + 1) +'不能为空', trigger: 'blur'}">
            <f-row>
                <f-col span="18">
                    <f-input type="text" v-model="item.value" placeholder="请输入..."></f-input>
                </f-col>
                <f-col span="4" offset="1">
                    <f-button type="ghost" @click="handleRemove(index)">删除</f-button>
                </f-col>
            </f-row>
        </f-form-item>
        <f-form-item>
            <f-row>
                <f-col span="12">
                    <f-button type="dashed" long @click="handleAdd" icon="plus-round">新增</f-button>
                </f-col>
            </f-row>
        </f-form-item>
        <f-form-item>
            <f-button type="primary" @click="handleSubmit('formDynamic')">提交</f-button>
            <f-button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">重置</f-button>
        </f-form-item>
    </f-form>
</template>
<script>
    export default {
        data () {
            return {
                formDynamic: {
                    items: [
                        {
                            value: ''
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.formDynamic.items.push({
                    value: ''
                });
            },
            handleRemove (index) {
                this.formDynamic.items.splice(index, 1);
            }
        }
    }
</script>

```
:::


### API

#### Form props 

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 表单数据对象 | Object | \- |
| rules | 表单验证规则，具体配置查看 [async-validator](https://github.com/yiminghe/async-validator) | Object | \- |
| inline | 是否开启行内表单模式 | Boolean | false |
| label-position | 表单域标签的位置，可选值为 `left`、`right`、`top` | String | right |
| label-width | 表单域标签的宽度，所有的 Form-item 都会继承 Form 组件的 label-width 的值 | Number | \- |
| show-message | 是否显示校验错误信息 | Boolean | true |


#### Form methods 


| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| validate | 对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败 | callback |
| validateField | 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，同上 | callback |
| resetFields | 对整个表单进行重置，将所有字段值重置为空并移除校验结果 | 无 |


#### FormItem props 


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prop | 对于表单域 model 里的字段 | String | \- |
| label | 标签文本 | String | \- |
| label-width | 表单域标签的的宽度 | Number | \- |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | Boolean | \- |
| rules | 表单验证规则 | Number | \- |
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 | String | \- |
| show-message | 是否显示校验错误信息 | Boolean | true |


#### FormItem slot 


| 名称 | 说明 |
| --- | --- |
| 无 | 内容 |
| label | label 内容 |




