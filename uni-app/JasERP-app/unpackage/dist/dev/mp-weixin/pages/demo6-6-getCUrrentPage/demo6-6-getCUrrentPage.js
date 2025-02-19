"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo6-6-getCUrrentPage",
  setup(__props) {
    common_vendor.index.__f__("log", "at pages/demo6-6-getCUrrentPage/demo6-6-getCUrrentPage.vue:8", getCurrentPages());
    function beginTo() {
      common_vendor.index.navigateTo({
        url: "/pages/demo6-3-scroll/demo6-3-scroll"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(beginTo)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo6-6-getCUrrentPage/demo6-6-getCUrrentPage.js.map
