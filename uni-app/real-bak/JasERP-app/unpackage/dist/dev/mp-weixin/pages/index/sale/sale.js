"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "sale",
  setup(__props) {
    function backToIndex() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(backToIndex)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/sale/sale.js.map
