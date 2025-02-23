# 移动端学习

# 一、准备工作

## 1.1，使用vite搭建项目环境

```shell
npm create vite@latest
```

## 1.2，`Vant`安装与基本使用

###1.2.1，安装

```shell
npm install vant -S
```

### 1.2.2，配置

> 因为刚学，所以直接用全局引入，格局如下

```js
//main.js
import { createApp } from 'vue';
import App from './App.vue';
//下面两行
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
//use一下
app.use(Vant);
app.mount('#app');
```

### 1.2.3，运行测试

```vue
<!--在template里面添加按钮看看有没有成功引入样式-->
<van-button type="primary">主要按钮</van-button>
<van-button type="success">成功按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="danger">危险按钮</van-button>
<van-button type="warning">警告按钮</van-button>
```

```vue
npm run dev
```

## 1.3，移动端`rem`适配

> 由于手机机型太多，因此适配是很重要的一步

### 1.3.1，项目根目录执行

> 此工具用来设置`rem`的基准值

```shell
npm i -S amfe-flexible
```

### 1.3.2，导入使用

```js
//main.js
import "amfe-flexible"
```

效果就像响应式，会根据不同的屏幕设置页面

## 1.4，PostCSS适配

> 是另一个适配工具

### 1.4.1，安装

```shell
npm install postcss postcss-pxtorem --save-dev
```

###  1.4.2，配置

> 非最终

```js
// postcss.config.cjs
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

### 1.4.3，其它设计稿的配置

> 最终配置

```js
// postcss.config.cjs
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
};
```



# 二、封装请求模块

## 2.1，安装`axios`

```shell
npm install axios -D
```

## 2.2，封装请求基本步骤

安装后，在`src`目录创建一个`utils`目录，下面创建一个`request.js`

```js
//request.js
import axios from "axios";
//创建了一个request实例
const request = axios.create({
  baseURL:"http://localhost:3005/",
  //请求拦截器
  //响应拦截器
});
export default request;
```

# 三、创建登录路由

## 3.1，安装

```shell
npm install vue-router@4
```

## 3.2，创建路由基本步骤

> 基本步骤如下

```js
import { createRouter, createWebHashHistory } from 'vue-router'
//1，创建路由规则
const routes = [
  {
    path: '/login',
    name:"login",
    component: () => import('../views/login/index.vue')
  },
]
//2，创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
//3，创建登录组件
//4，指定出口
```

在**创建路由规则**的时候，已经制定了登录页面的位置，因此**创建登录组件**就是去对应位置创建

例如本次的登录窗口就要去`/views/login/index.vue`创建

然后去`main.js`绑定路由

```shell
import router from './router/index.js'
createApp(App).use(Vant).use(router).mount('#app')
```

## 3.3，总结

所以一共四步：（不包括安装）

1. 创建路由规则

2. 创建路由实例

3. 创建对应组件

4. 去`main,js`绑定

5. 指定出口

   > 路由匹配成功的话，就会显示在这个位置

   ```vue
   <!--App.vue-->
   <template>
   <router-view></router-view>
   </template>
   ```



# 四、登录

