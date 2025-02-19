"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo6-1-Load-Show-Hide",
  setup(__props) {
    let time = common_vendor.ref(0);
    let interval = setInterval(() => {
      time.value++;
    }, 100);
    common_vendor.onLoad(() => {
      common_vendor.index.__f__("log", "at pages/demo6-1-Load-Show-Hide/demo6-1-Load-Show-Hide.vue:22", "加载界面");
    });
    common_vendor.onShow(() => {
      common_vendor.index.__f__("log", "at pages/demo6-1-Load-Show-Hide/demo6-1-Load-Show-Hide.vue:25", "onShow");
      interval = setInterval(() => {
        time.value++;
      }, 100);
    });
    common_vendor.onHide(() => {
      clearInterval(interval);
      common_vendor.index.__f__("log", "at pages/demo6-1-Load-Show-Hide/demo6-1-Load-Show-Hide.vue:32", "隐藏");
    });
    common_vendor.onUnload(() => {
      common_vendor.index.__f__("log", "at pages/demo6-1-Load-Show-Hide/demo6-1-Load-Show-Hide.vue:35", "执行了unload");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(time))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo6-1-Load-Show-Hide/demo6-1-Load-Show-Hide.js.map
