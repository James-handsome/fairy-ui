# fairy-ui 组件库

### 快速开始

#### 1、安装组件库

````bash
 npm i fairy-ui
````

#### 2、引用组件库
````javascript
    // 全部引入 
    import 'fairy-ui/dist/css/index.css'
    import fairyUi from 'fairy-ui'
    Vue.use(fairyUi)

    // 按需引用
    import 'fairy-ui/dist/css/card.css'
    import { Card } from 'fairy-ui'
    Vue.use(Card)
````
"pre-commit": "lint-staged"