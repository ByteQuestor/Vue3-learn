# 移动端学习

# 1、准备工作

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



# 2、封装请求模块

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

# 3、创建登录路由

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



# 4、登录

> 使用自定义界面之前，先把自带的`style.css`删掉，然后取消`main.js`的引用

## 4.1，登录静态实现

### 4.1.1，基本实现

```vue
<template>
    <div>
        <van-nav-bar title="标题"/>
        <van-field name="userName" label="用户名" placeholder="请输入用户名" />
        <van-field type="password" name="userPwd" label="密码" placeholder="请输入密码" />
        <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
    </div>
</template>
```

### 4.1.2，美化

> 添加一个类，并且引入了左侧图标
>
> 关于`vant`图标库，在【基础组件】-【`icon`图标】

```vue
<template>
    <div>
        <van-nav-bar title="登录" class="page-nav-bar"/>
        <van-field left-icon="manager" name="userName" label="用户名" placeholder="请输入用户名" />
        <van-field left-icon="lock" type="password" name="userPwd" label="密码" placeholder="请输入密码" />
        <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
    </div>
</template>
```

> 对于像导航栏这种，就可以在`src`下面创建`style/index.css`，当作全局样式

```css
.page-nav-bar {
    background-color: #007AFF;
}
/*注意，下面这个组件，去浏览器选择元素看看它的class是啥*/
.van-nav-bar__title.van-ellipsis {
    color: #ffffff;
}
```

然后去`main.js`里引入，全局变量其它组件也能使用

```js
import './style/index.css'
```

## 4.3，登录功能实现

大致就是：构建登录请求、获取表单发送到服务端

### 4.3.1，构建登录请求

> 创建`src/api/user.js`，用于封装用户相关的请求

```js
import request from "./utils/request.js"
export const login = (data) => {
	return request({
        method: "post",
		url: "/user/login",
        data,
	})
}
```

### 4.3.2，获取表单发送到服务端

> 创建一个响应式对象，将这个响应式对象里的属性与文本框内的进行绑定

1. 创建响应式对象
   ```js
   import {reactive, toRefs} from "vue";
   export default{
       setup(){
           const user=reactive({
               userName:'',
               userPwd:''
           })
           return{
               ...toRefs(user)
           }
       }
   }
   ```

2. 绑定文本框，使用`v-model`
   ```vue
   <van-field left-icon="manager" name="userName" placeholder="请输入用户名" v-model="userName"/>
   <van-field left-icon="lock" type="password" name="userPwd" placeholder="请输入密码" v-model="userName" />
   ```

   

## 4.4，登录成功提示

> `showLoadingToast`在数据返回之前会有加载效果，记得在网页中调到`3G`要不然看不到效果
>
> `showSuccessToast`和`showFailToast`，一个成功一个失败

```js
import { showSuccessToast, showFailToast,showLoadingToast  } from 'vant';
// 定义 useSubmit 函数
function useSubmit(user) {
    
    const onSubmit = async () => {
        showLoadingToast({
        message: '加载中...',
        forbidClick: true,
    });
        console.log(user);
        const res = await login(user);
        if (res.data.code === 200) {
            // console.log("用户登录成功");
            // console.log(res.data);
            showSuccessToast('登录成功');
        } else {
            // console.log("用户登录失败");
            showFailToast('登陆失败');
        }
    };
    return {
        onSubmit
    };
};
```



## 4.5，表单校验规则

1. 定义规则
   ```js
   // 定义 useSubmit 函数
   function useSubmit(user) {
       
       const onSubmit = async () => {
           showLoadingToast({
           message: '加载中...',
           forbidClick: true,
       });
           console.log(user);
           const res = await login(user);
           if (res.data.code === 200) {
               // console.log("用户登录成功");
               // console.log(res.data);
               showSuccessToast('登录成功');
           } else {
               // console.log("用户登录失败");
               showFailToast('登陆失败');
           }
       };
   
       const userFormRules = {
           username: [
               { required: true, message: '请输入用户名' }],
           password: [
               { required: true, message: '请输入密码' },  // 修正：将 message 改为 required
               // { min: 3, max: 10, message: '长度在 3 到 10 个字符' }
               {pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: '密码必须包含字母和数字，且长度至少为8位'}
           ]
       };
       return {
           onSubmit,
           userFormRules
       };
   };
   //注意解构
   export default {
       setup() {
           const user = reactive({
               username: '',
               password: ''
           });
           return {
               ...toRefs(user),
               ...useSubmit(user),
           };
       }
   };
   ```

2. 绑定到组件
   ```vue
   <van-field left-icon="manager" name="password" placeholder="请输入用户名" v-model="username"
              :rules="userFormRules.name" />
   <van-field left-icon="lock" type="password" name="password" placeholder="请输入密码" v-model="password"
              :rules="userFormRules.pwd" />
   ```

## 4.6，处理用户`token`

> 本次使用`vuex`，后续应替换为`pinia`

```shell
npm install vuex@next --save
```

大致思路：

> 新建文件`\src\store\index.js`

1. 创建一个`store`的容器

2. 指定一个`state`来存储数据

3. 指定一个方法专门修改容器中的数据
   ```js
   import { createStore } from 'vuex'
   const store = createStore({
       state: {
           user: null
       },
       mutations: {
           setUser(state, user) {
               state.user = user
           }
       }
   })
   
   export default store;
   ```

4. 去`main.js`里导入并`use`一下
   ```js
   import store from './store/index.js';
   createApp(App).use(Vant).use(router).use(store).mount('#app')
   ```

> 至此，准备工作已经完成，那么如何将后端的数据存储到容器里面

在发生`/`接收请求的界面

```js
import { useStore } from "vuex";
const store = useStore();
store.commit("setUser", res.data.data);
```

实际效果：

```js
function useSubmit(user) {
    const store = useStore();
    const onSubmit = async () => {
        showLoadingToast({
            message: '加载中...',
            forbidClick: true,
        });
        console.log(user);
        const res = await login(user);
        if (res.data.code === 200) {
            // console.log("用户登录成功");
            // console.log(res.data);
            store.commit("setUser", res.data.data);
            showSuccessToast('登录成功');
        } else {
            // console.log("用户登录失败");
            showFailToast('登陆失败');
        }
    };
```

> 但是这种情况下，浏览器一刷新数据就没了，因此需要进行持久化存储，操作如下：

```js
import { createStore } from 'vuex'
const TOKEN_KEY = "ADMIN_USER_TOKEN"
const store = createStore({
    state: {
        user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            console.log(state.user)
            window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
        }
    }
})

export default store;
```

在其它界面直接调用

```js
<script>
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    console.log("App.vue")
    console.log(store);
    console.log(store.state.user);
  }
}
</script>
```

> 这样，就实现了本地的数据存储

## 4.7，封装本地存储

> 因为本地存储方法比较常用，所以决定封装一下，位于`\src\utils\storage.js`

```js
//存储数据
export const setItem = (key, value) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
};

//获取数据
export const getItem = (key) => {
    const data = window.localStorage.getItem(key)
    /**
     * 小技巧，可以尝试把数据转为对象，如果成功，就返回对象，如果失败，就返回字符串
     */
    try {
        return JSON.parse(data)
    } catch (e) {
        return data
    }
};

//删除数据
export const removeItem = (key) => {
    window.localStorage.removeItem(key)
};
```

> 改造调用存储方法

```js
import { createStore } from 'vuex';
import { getItem, setItem } from '../utils/storage.js'
const TOKEN_KEY = "ADMIN_USER_TOKEN"
const store = createStore({
    state: {
        user: getItem(TOKEN_KEY)
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            console.log(state.user)
            setItem(TOKEN_KEY, state.user)
        }
    }
})

export default store;
```



# 5、TabBar组件

## 5.1,TabBar组件使用

> 关于底部组件的介绍
>
> ①预留一个子路由`\views\layout\index.vue`

```vue
<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>
```

> 去`\router\index.js`创建父路由

```js
const routes = [
  {
    path: '/login',
    name:"login",
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    name:"layout",
    component: () => import('../views/layout/index.vue')
  }
]
```

然后去浏览器访问根路径即可

## 5.2，路由规划

```js
const routes = [
  {
    path: '/login',
    name: "login",
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    name: "layout",
    component: () => import('../views/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: "home",
        component: () => import('../views/home/home.vue')
      },
      {
        path: '/data',
        name: "data",
        component: () => import('../views/data/data.vue')
      },
      {
        path: '/addr',
        name: "addr",
        component: () => import('../views/addr/addr.vue')
      },
      {
        path: '/mine',
        name: "mine",
        component: () => import('../views/mine/mine.vue')
      },
    ]
  }
]
```

> 根据路径设置不同的界面

## 5.3，开启路由

```vue
<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/data">报表</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/addr">客服</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>

</template>
```



# 6、各种布局

## 6.1，未登录布局

### 6.2，静态实现

```vue
<template>
<div class="my-container">
    <div class="header not-login">
        <div class="login-btn">
            <img class="mobile-img" src="../../assets/snack.png" alt="" />
            <span class="text">注册/登录</span>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style>
.my-container{
    height: 100%;
    background-color: #f5f5f5;
}
.header.not-login {
    background-color: #0088ff; /* 设置头部蓝色背景 */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0; /* 调整内边距 */
}
.login-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mobile-img {
    width: 80px; /* 设置图片宽度 */
    height: 80px; /* 设置图片高度 */
    border-radius: 50%; /* 使图片呈圆形 */
}
.text {
    color: white; /* 文字颜色为白色 */
    margin-top: 20px; /* 文字与图片的间距 */
    font-size: 18px; /* 设置文字大小 */
}
</style>
```

### 6.3，添加跳转

> 当点击图片、以及文字所在元素块的时候，会跳转，所以直接绑定这一个块

```vue
<div class="login-btn" @click="this.$router.push('/login')">
    <img class="mobile-img" src="../../assets/snack.png" alt="" />
    <span class="text">注册/登录</span>
</div>
```

> 当跳转到登录/注册界面后，如果不想登录注册了，当然是需要一个返回到**我的**界面的导航按钮

```vue
<van-nav-bar title="登录" class="page-nav-bar">
    <template #left>
		<van-icon name="cross" size="18" @click="this.$router.back()"/>
    </template>
</van-nav-bar>
```

上面就是插槽，在之前它是这样的

```vue
<van-nav-bar title="登录" class="page-nav-bar" />
```

## 6.2，登录后布局

```vue
<div class="header user-info">
    <div class="base-info">
        <div class="left">
            <van-image fit="cover" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                       class="avatar"></van-image>
            <span class="name">茉莉花工作室首款</span>
        </div>
        <div class="right">
            <van-button size="mini" round>
                编辑资料
            </van-button>
        </div>
    </div>
    <div class="data-stats">
        <div class="data-item">
            <span class="count">123</span>
            <span class="text">头条</span>
        </div>
        <div class="data-item">
            <span class="count">456</span>
            <span class="text">粉丝</span>
        </div>
        <div class="data-item">
            <span class="count">789</span>
            <span class="text">关注</span>
        </div>
        <div class="data-item">
            <span class="count">789</span>
            <span class="text">关注</span>
        </div>
    </div>
</div>
```

> `CSS`效果

```css
.user-info {
    background-color: white;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info .base-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.user-info .left {
    display: flex;
    align-items: center;
}

.user-info .left .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #ccc;
}

.user-info .left .name {
    font-size: 18px;
    font-weight: bold;
}

.user-info .right {
    display: flex;
    align-items: center;
}

.data-stats {
    display: flex;
    justify-content: space-around;
}

.data-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.data-item .count {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
}

.data-item .text {
    color: #666;
    font-size: 14px;
    margin-top: 0;
}
```



## 6.3，宫格导航布局

> `ERP`的首页也将采取此布局

```vue
<!---宫格布局-->
<van-grid :column-num="2" clickable>
    <van-grid-item icon="star-o" text="文字" />
    <van-grid-item icon="clock-o" text="文字" />
</van-grid>
```

代码说明：

`:column-num="2"`说明每行两列

`clickable`点击的动画

> 更改图标样式，至于为什么是这个标签，去渲染后的界面用选择器选择对应元素后得到的

```css
.van-grid-item__icon {
    color: #eb5253;
}
```

## 6.4，消息通知与退出登录布局

> 子界面将会用到这种布局

```vue
<!---消息通知与退出登录-->
<van-cell title="消息通知"  is-link/>
<van-cell title="功能设置"  is-link/>
<van-cell title="退出登录"  class="logout-cell"/>
```

`is-link`就是右侧那个小箭头

> 样式：此样式比较万能，主要效果是文字居中和改变颜色

```css
.logout-cell{
    text-align: center;
    color: #d86262;
    height: 120px;
    margin-top: 9px;
}
```



# 7、处理页面显示状态

## 7.1,登录与未登录显示不同界面

> 根据数据的不同，显示的界面也有所不同，在ERP中，如果要定制页面需求，那么就可以通过此方法进行定制显示

>
>已处理登录/未登录为例
>
>+ 如果能够获取到用户信息，就显示A元素块
>
>+ 如果获取不到就是未登录，就显示B元素块

通过`vuex`进行获取数据,在哪个界面进行判断就在哪个界面写

```vue
<template>
<div class="my-container">
    <!-- 未登录状态 -->
    <div v-if="!userState" class="header not-login">
        <div class="login-btn" @click="this.$router.push('/login')">
            <img class="mobile-img" src="../../assets/snack.png" alt="" />
            <span class="text">注册/登录</span>
    </div>
    </div>
    <!-- 已登录状态 -->
    <div v-else class="header user-info">
        <div class="base-info">
            <div class="left">
                <van-image fit="cover" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                           class="avatar"></van-image>
                <span class="name">茉莉花工作室首款</span>
    </div>
            <div class="right">
                <van-button size="mini" round>
                    编辑资料
    </van-button>
    </div>
    </div>
        <div class="data-stats">
            <div class="data-item">
                <span class="count">123</span>
                <span class="text">头条</span>
    </div>
            <div class="data-item">
                <span class="count">456</span>
                <span class="text">粉丝</span>
    </div>
            <div class="data-item">
                <span class="count">789</span>
                <span class="text">关注</span>
    </div>
            <div class="data-item">
                <span class="count">789</span>
                <span class="text">关注</span>
    </div>
    </div>
    </div>

    <!---宫格布局-->
    <van-grid :column-num="2" clickable>
        <van-grid-item icon="star-o" text="文字" />
        <van-grid-item icon="clock-o" text="文字" />
    </van-grid>

    <!---消息通知与退出登录-->
    <van-cell title="消息通知" is-link />
    <van-cell title="功能设置" is-link />
    <van-cell title="退出登录" class="logout-cell" v-if="userState" />
    </div>
</template>

<script>
    import { useStore } from "vuex";
    import { computed } from "vue";
    export default {
        setup() {
            const store = useStore();
            const userState = computed(() => store.state.user);
            return {
                userState,
            };
        }
    }
</script>
<style>
    /**页面无变化**/
</style>
```

## 7.2,优化TabBar显示

> 当未登录时,我的按钮显示**未登录**,登陆后显示**我的**

```vue
<!--layout.vue-->
<template>
<div>
    <router-view></router-view>
    <van-tabbar route><!-- v-model="active"-->
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/data">报表</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/addr">客服</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/mine">{{userState?"我的":"未登录"}}</van-tabbar-item>
    </van-tabbar>
    </div>

</template>

<script>
    import { ref,computed } from 'vue';
    import { useStore } from "vuex";
    export default {
        setup() {
            const active = ref();
            const store = useStore();
            const userState = computed(() => store.state.user);
            return { active,userState };
        },
    };
</script>
```

## 7.3,登录成功跳转

> 点击登录,登录成功后要跳转,
>
> 一共就两步骤:①导入路由,②在跳转的地方跳转

```vue
<!--login.vue-->
import userRouter  from '../../router';
userRouter.push('/mine')
```

## 7.4,退出登录

总共分为3步

①为退出按钮绑定一个方法

②在方法里调用`vant`组件,点击确定后,重新设置用户存储信息为空就行了

```vue
<template>
    <div class="my-container">
        <!-- 未登录状态 -->
        <div v-if="!userState" class="header not-login">
            <div class="login-btn" @click="this.$router.push('/login')">
                <img class="mobile-img" src="../../assets/snack.png" alt="" />
                <span class="text">注册/登录</span>
            </div>
        </div>
        <!-- 已登录状态 -->
        <div v-else class="header user-info">
            <div class="base-info">
                <div class="left">
                    <van-image fit="cover" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                        class="avatar"></van-image>
                    <span class="name">茉莉花工作室首款</span>
                </div>
                <div class="right">
                    <van-button size="mini" round>
                        编辑资料
                    </van-button>
                </div>
            </div>
            <div class="data-stats">
                <div class="data-item">
                    <span class="count">123</span>
                    <span class="text">头条</span>
                </div>
                <div class="data-item">
                    <span class="count">456</span>
                    <span class="text">粉丝</span>
                </div>
                <div class="data-item">
                    <span class="count">789</span>
                    <span class="text">关注</span>
                </div>
                <div class="data-item">
                    <span class="count">789</span>
                    <span class="text">关注</span>
                </div>
            </div>
        </div>

        <!---宫格布局-->
        <van-grid :column-num="2" clickable>
            <van-grid-item icon="star-o" text="文字" />
            <van-grid-item icon="clock-o" text="文字" />
        </van-grid>

        <!---消息通知与退出登录-->
        <van-cell title="消息通知" is-link />
        <van-cell title="功能设置" is-link />
        <van-cell title="退出登录" class="logout-cell" v-if="userState" @click="onLogout" />
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { showConfirmDialog } from 'vant';
function userLogout(store) {
    const onLogout = () => {
        //在这里添加退出登录的逻辑
        showConfirmDialog({
            // title: '标题',
            message:
                '确认退出吗？',
        })
            .then(() => {
                // 确认按钮
                // console.log("退出")
                store.commit("setUser", null);
            })
            .catch(() => {
                // 取消按钮
                console.log("取消")
            });
    }
    return {
        onLogout,

    }
}
export default {
    setup() {
        const store = useStore();
        const userState = computed(() => store.state.user);
        return {
            userState,
            ...userLogout(store)
        };
    }
}
</script>
```































































































# BUG修复

## 修复5、TabBar组件路由

> Bug描述：
>
> ①如果设置了`const active = ref(0);`，仅在首次访问`/`路径时处于`home`界面，而且么`home`按钮处于常亮状态，可以切到其它三个界面，而且其它三个界面也正常切换，但是无法再切换回`home`界面

> 解决方案
>
> 为了实现进入后默认在`home`页的效果，需要在路由中重定向至`home`界面
>
> 开启了路由以后，无需再双向绑定

```vue
<template>
    <div>
        <router-view></router-view>
        <van-tabbar route><!-- v-model="active"-->
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/data">报表</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/addr">客服</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref();
    return { active };
  },
};
</script>
```

路由规划

```js
{
    path: '/',
    name: "layout",
    component: () => import('../views/layout/index.vue'),
    children: [
      // 当访问根路径 / 时，重定向到 /home 路由
      {
        path: '',
        redirect: '/home'
    },
      {
        path: '/home',
        name: "home",
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/data',
        name: "data",
        component: () => import('../views/data/data.vue')
      },
      {
        path: '/addr',
        name: "addr",
        component: () => import('../views/addr/addr.vue')
      },
      {
        path: '/mine',
        name: "mine",
        component: () => import('../views/mine/mine.vue')
      },
    ]
  }
```

