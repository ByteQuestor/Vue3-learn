"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5-4-v-on",
  setup(__props) {
    let a = common_vendor.ref(1);
    common_vendor.ref({
      name: "李四",
      height: 170,
      like: ["打篮球", "跑步"]
    });
    function toGoodDetail(event) {
      common_vendor.index.__f__("log", "at pages/demo5-4-v-on/demo5-4-v-on.vue:29", event);
      common_vendor.index.showToast({
        title: "点击了薯条"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => toGoodDetail(common_vendor.unref(a)))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo5-4-v-on/demo5-4-v-on.js.map
