"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo-vue3",
  setup(__props) {
    let name = "王子阳";
    let imgUrl = "../../static/demo-image.png";
    let active = false;
    let height = 500;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(name) + "123"),
        b: common_vendor.t(common_vendor.unref(active) ? "yes" : "no"),
        c: common_vendor.t(Date.now()),
        d: common_vendor.t(Math.random()),
        e: common_vendor.unref(imgUrl),
        f: common_vendor.unref(active) ? 1 : "",
        g: common_vendor.n(common_vendor.unref(active) ? "aaa" : "bbb"),
        h: common_vendor.unref(height) + "px"
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo-vue3/demo-vue3.js.map
