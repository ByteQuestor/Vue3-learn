"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo6-4-apiTo",
  setup(__props) {
    function toDemo() {
      common_vendor.index.navigateTo({
        url: "/pages/demo6-2/demo6-2?id=1234&name=王子阳"
      });
    }
    const app = getApp();
    common_vendor.index.__f__("log", "at pages/demo6-4-apiTo/demo6-4-apiTo.vue:28", "这里是demo6-4：" + app.globalData.userNickName);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toDemo)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo6-4-apiTo/demo6-4-apiTo.js.map
