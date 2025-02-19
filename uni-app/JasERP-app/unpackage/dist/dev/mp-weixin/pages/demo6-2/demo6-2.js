"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo6-2",
  setup(__props) {
    let good = common_vendor.ref({});
    common_vendor.onLoad((event) => {
      common_vendor.index.__f__("log", "at pages/demo6-2/demo6-2.vue:18", event);
      good.value.id = event.id;
      good.value.name = event.name;
    });
    function toDemo() {
      common_vendor.index.navigateBack();
    }
    function reLaunch() {
      common_vendor.index.reLaunch({
        // url:'demo6-2'
        url: "/pages/demo-vue3/demo-vue3"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toDemo),
        b: common_vendor.o(reLaunch),
        c: common_vendor.t(common_vendor.unref(good).name),
        d: common_vendor.t(common_vendor.unref(good).id)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo6-2/demo6-2.js.map
