"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "demo5-6-v-if-show",
  setup(__props) {
    let bool = common_vendor.ref(true);
    let day = common_vendor.ref(1);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(bool)
      }, common_vendor.unref(bool) ? {} : {}, {
        b: common_vendor.unref(day) == 1
      }, common_vendor.unref(day) == 1 ? {} : common_vendor.unref(day) == 2 ? {} : common_vendor.unref(day) == 3 ? {} : common_vendor.unref(day) == 4 ? {} : common_vendor.unref(day) == 5 ? {} : common_vendor.unref(day) == 6 ? {} : common_vendor.unref(day) == 7 ? {} : {}, {
        c: common_vendor.unref(day) == 2,
        d: common_vendor.unref(day) == 3,
        e: common_vendor.unref(day) == 4,
        f: common_vendor.unref(day) == 5,
        g: common_vendor.unref(day) == 6,
        h: common_vendor.unref(day) == 7,
        i: common_assets._imports_0,
        j: common_assets._imports_1
      }, {
        l: common_assets._imports_1
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo5-6-v-if-show/demo5-6-v-if-show.js.map
