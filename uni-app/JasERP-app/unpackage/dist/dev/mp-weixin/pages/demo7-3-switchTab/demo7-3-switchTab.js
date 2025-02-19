"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo7-3-switchTab",
  setup(__props) {
    function toDemo() {
      common_vendor.index.switchTab({
        url: "/pages/demo7-2-tabbar/demo7-2-tabbar"
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
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo7-3-switchTab/demo7-3-switchTab.js.map
