"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo6-5-getApp",
  setup(__props) {
    const app = getApp();
    common_vendor.index.__f__("log", "at pages/demo6-5-getApp/demo6-5-getApp.vue:10", app.globalData.userInfo);
    common_vendor.index.__f__("log", "at pages/demo6-5-getApp/demo6-5-getApp.vue:11", app.globalData.userNickName);
    app.doSomeThing();
    app.globalData.userNickName = "今天是2025-2-18，我正在学uni-app";
    common_vendor.index.__f__("log", "at pages/demo6-5-getApp/demo6-5-getApp.vue:16", app.globalData.userNickName);
    function toDemo() {
      common_vendor.index.navigateTo({
        url: "/pages/demo6-4-apiTo/demo6-4-apiTo"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toDemo)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo6-5-getApp/demo6-5-getApp.js.map
