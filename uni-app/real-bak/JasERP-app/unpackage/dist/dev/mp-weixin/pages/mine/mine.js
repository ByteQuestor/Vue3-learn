"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    function toSettings() {
      common_vendor.index.navigateTo({
        url: "/pages/mine/settings/settings"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toSettings)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/mine.js.map
