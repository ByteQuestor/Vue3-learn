"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5-5-v-model",
  setup(__props) {
    let ipt = common_vendor.ref();
    let person = common_vendor.ref({
      name: "张三",
      age: 23
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(ipt)),
        b: common_vendor.t(common_vendor.unref(person))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo5-5-v-model/demo5-5-v-model.js.map
