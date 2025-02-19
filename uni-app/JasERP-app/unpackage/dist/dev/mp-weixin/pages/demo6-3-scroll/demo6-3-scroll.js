"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo6-3-scroll",
  setup(__props) {
    let good = common_vendor.ref({});
    let show = common_vendor.ref(false);
    common_vendor.index.__f__("log", "at pages/demo6-3-scroll/demo6-3-scroll.vue:20", getCurrentPages());
    common_vendor.onLoad((event) => {
      common_vendor.index.__f__("log", "at pages/demo6-3-scroll/demo6-3-scroll.vue:22", event);
      good.value.id = event.id;
      good.value.name = event.name;
    });
    common_vendor.onPageScroll((event) => {
      common_vendor.index.__f__("log", "at pages/demo6-3-scroll/demo6-3-scroll.vue:27", event.scrollTop);
      if (event.scrollTop > 50) {
        show.value = true;
      } else {
        show.value = false;
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(100, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        b: common_vendor.unref(show)
      }, common_vendor.unref(show) ? {} : {});
    };
  }
};
_sfc_main.__runtimeHooks = 1;
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo6-3-scroll/demo6-3-scroll.js.map
