"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo-input",
  setup(__props) {
    function getValue(event) {
      common_vendor.index.__f__("log", "at pages/demo-input/demo-input.vue:17", event.detail.value);
    }
    function confirm(event) {
      common_vendor.index.__f__("log", "at pages/demo-input/demo-input.vue:20", event.detail.value);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(getValue),
        b: common_vendor.o(confirm)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo-input/demo-input.js.map
