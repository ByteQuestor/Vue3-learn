# `Vue3-learn`

# 第一节课【课程介绍】

本次采用`TypeScript` + 组合式`API` + `setup`语法糖

以新为准

# 第二节课【`Vue3`简介】

版本`3.3.4`版本

# 第三节课【创建`Vue3`工程】

## 基于`vue-cli`创建

## 基于`vite`创建【使用】

+ 官方文档`https://vitejs.cn`

+ 下载`nodejs`，为了使用`npm`
  本机版本`v20.18.0`

+ 创建工程
  ```shell
  PS E:\User\wzy\github\Vue3-learn> npm create vue@latest
  Need to install the following packages:
  create-vue@3.12.2
  Ok to proceed? (y) y
  
  
  > npx
  > create-vue
  
  
  Vue.js - The Progressive JavaScript Framework
  
  √ 请输入项目名称： ... hello_vue3
  √ 是否使用 TypeScript 语法？ ... 否 / 是
  √ 是否启用 JSX 支持？ ... 否 / 是
  √ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / 是
  √ 是否引入 Pinia 用于状态管理？ ... 否 / 是
  √ 是否引入 Vitest 用于单元测试？ ... 否 / 是
  √ 是否要引入一款端到端（End to End）测试工具？ » 不需要
  √ 是否引入 ESLint 用于代码质量检测？ » 否
  
  正在初始化项目 E:\User\wzy\github\Vue3-learn\hello_vue3...
  
  项目初始化完成，可执行以下命令：
  
    cd hello_vue3
    npm install
    npm run dev
  
  PS E:\User\wzy\github\Vue3-learn> 
  ```

+ 插件
  ```shell
  Vue Langue Features   	最新的叫`Vue-Official`
  ```

  ```shell
  TypeScript Vue Plugin (Volar)
  ```

+ 爆红解决
  ![image-20241203221048390](./README.assets/image-20241203221048390.png)

  输入`npm i`，根据环境安装所有依赖，然后同级目录下会出现一个`node_modules`

  这个文件的作用是，辅助`ts`认识`.txt`、`.jpg`这些文件

+ 运行项目
  ```shell
  PS E:\User\wzy\github\Vue3-learn\hello_vue3> npm run dev
  
  > hello_vue3@0.0.0 dev
  > vite
  
  
    VITE v6.0.2  ready in 627 ms
  
    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  Vue DevTools: Open http://localhost:5173/__devtools__/ as a separate window
    ➜  Vue DevTools: Press Alt(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools
  
    ➜  press h + enter to show help
  ```

+ 停掉项目

  直接`ctrl + C`即可




# 第四节课【编写`vue`组件】

`demo001`

# 第五节课【一个简单的效果】

`vscode`同时修改多行多列，`shift+alt`拖动选择列，然后输入，可以在多行输入相同内容
`demo002`

# 第六课【OptionsApi与CompositionApi】

之前用的是`OptionsApi`选项式，以后用`CompositionApi`组合式

# 第七课【setup概述】

`demo003`



