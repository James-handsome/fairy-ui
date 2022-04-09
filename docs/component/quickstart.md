### 快速上手
----



一般在 vue 入口页面 `main.js` 中如下配置：
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
    import Button from 'fairy-ui/packages/components/checkbox';
````



