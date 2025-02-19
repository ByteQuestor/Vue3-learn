"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5-3-ref",
  setup(__props) {
    let a = common_vendor.ref(1);
    let lisi = common_vendor.ref({
      name: "李四",
      height: 170,
      like: ["打篮球", "跑步"]
    });
    lisi.value.height = 175;
    lisi.value.like.push("乒乓球");
    setInterval(() => {
      a.value++;
      lisi.value.height++;
      common_vendor.index.__f__("log", "at pages/demo5-3-ref/demo5-3-ref.vue:23", lisi.value.height);
    }, 1e3);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(lisi).name),
        b: common_vendor.t(common_vendor.unref(lisi).height),
        c: common_vendor.t(common_vendor.unref(lisi).like[0]),
        d: common_vendor.t(common_vendor.unref(lisi).like[1]),
        e: common_vendor.t(common_vendor.unref(lisi).like[2]),
        f: common_vendor.t(common_vendor.unref(a))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo5-3-ref/demo5-3-ref.js.map
