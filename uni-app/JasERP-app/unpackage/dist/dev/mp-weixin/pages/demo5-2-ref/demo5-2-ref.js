"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5-2-ref",
  setup(__props) {
    let height = common_vendor.ref(300);
    let name = common_vendor.ref("李四");
    setInterval(() => {
      height.value = height.value + 10;
      name.value = name.value + "123";
      common_vendor.index.__f__("log", "at pages/demo5-2-ref/demo5-2-ref.vue:24", height.value);
    }, 1e3);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(height) + "px",
        b: common_vendor.t(common_vendor.unref(height)),
        c: common_vendor.t(common_vendor.unref(name))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo5-2-ref/demo5-2-ref.js.map
