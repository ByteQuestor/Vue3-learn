"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/demo-text/demo-text.js";
  "./pages/demo-image/demo-image.js";
  "./pages/demo-swiper/demo-swiper.js";
  "./pages/demo-input/demo-input.js";
  "./pages/demo-button/demo-button.js";
  "./pages/demo-form/demo-form.js";
  "./pages/demo-picker/demo-picker.js";
  "./pages/demo-vue3/demo-vue3.js";
  "./pages/demo5-2-ref/demo5-2-ref.js";
  "./pages/demo5-3-ref/demo5-3-ref.js";
  "./pages/demo5-4-v-on/demo5-4-v-on.js";
  "./pages/demo5-5-v-model/demo5-5-v-model.js";
  "./pages/demo5-6-v-if-show/demo5-6-v-if-show.js";
  "./pages/demo5-7-v-for/demo5-7-v-for.js";
  "./pages/demo5-8-v-for-key/demo5-8-v-for-key.js";
  "./pages/demo5-9-computed/demo5-9-computed.js";
  "./pages/demo5-10-watch/demo5-10-watch.js";
  "./pages/demo6-1-Load-Show-Hide/demo6-1-Load-Show-Hide.js";
  "./pages/demo6-2/demo6-2.js";
  "./pages/demo6-3-scroll/demo6-3-scroll.js";
  "./pages/demo6-4-apiTo/demo6-4-apiTo.js";
  "./pages/demo6-5-getApp/demo6-5-getApp.js";
  "./pages/demo6-6-getCUrrentPage/demo6-6-getCUrrentPage.js";
  "./pages/demo7-1-pulldownrefresh/demo7-1-pulldownrefresh.js";
  "./pages/demo7-2-tabbar/demo7-2-tabbar.js";
  "./pages/demo7-2-tabbar/home/home.js";
  "./pages/demo7-2-tabbar/sort/sort.js";
  "./pages/demo7-2-tabbar/mine/mine.js";
  "./pages/demo7-3-switchTab/demo7-3-switchTab.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:5", "App Launch");
    common_vendor.index.__f__("log", "at App.vue:7", this.globalData.httpUrl);
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:13", "App Hide");
  },
  //全局方法
  methods: {
    doSomeThing() {
      common_vendor.index.__f__("log", "at App.vue:18", "获取到了用户信息");
    }
  },
  //全局数据
  globalData: {
    userNickName: "王子阳",
    userInfo: {
      name: "王子阳",
      age: 23
    },
    httpUrl: "localhost:88888888888888888"
  }
  //全局方法
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
