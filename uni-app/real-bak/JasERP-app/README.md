# 关于APP端的技术栈
自产品界面以后，引入了`uView`开发`UI`界面

# 配置uView
[官方地址](https://uviewui.com/components/npmSetting.html)

1. 安装
   ```shell
   npm install uview-ui@2.0.38
   ```

2.  引入`uView`主`JS`库
   ```js
   // main.js
   import uView from "uview-ui";
   Vue.use(uView);
   ```

3. 在引入`uView`的全局`SCSS`主题文件
   ```js
   /* uni.scss */
   @import 'uview-ui/theme.scss';
   ```

4. 在`App.vue`中**首行**的位置引入，注意给`style`标签加入`lang="scss"`属性
   ```vue
   <style lang="scss">
   	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
   	@import "uview-ui/index.scss";
   </style>
   ```

5. 配置easycom组件模式
   ```json
   // pages.json
   {
   	"easycom": {
   		"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
   	},
   	
   	// 此为本身已有的内容
   	"pages": [
   		// ......
   	]
   }
   ```
