## fairy-ui 组件库

### 安装

#### npm 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。


```javaScript
  npm i fairy-ui
```

```javaScript
  yarn i fairy-ui
```

```javaScript
  pnpm i fairy-ui
```


一般在 vue 入口页面 `main.js` 中如下配置
#### 全部引入

````javaScript
        import Vue from 'vue';
        import router from './router';
    +   import fairyUi from 'fairy-ui';        // 引入组件库
    +   import 'fairy-ui/lib/styles/index.css' // 引入css 


    +   Vue.use(fairyUi);

        new Vue({
            el: '#app',
            router,
            render: h => h(App)
        });
````

#### 按需引用

如果您想在 webpack 中按需使用组件，减少文件体积，可以这样写,
注意:按需引入依然需要引入 css 文件

````javaScript
    import checkbox from 'fairy-ui/packages/components/checkbox';
````