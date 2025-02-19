"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo-form",
  setup(__props) {
    function formSubmit(event) {
      common_vendor.index.showToast({
        title: "提交成功"
      });
      common_vendor.index.__f__("log", "at pages/demo-form/demo-form.vue:56", event);
      common_vendor.index.__f__("log", "at pages/demo-form/demo-form.vue:57", event.detail.value.value);
    }
    function formReset(event) {
      common_vendor.index.__f__("log", "at pages/demo-form/demo-form.vue:60", event.detail.value.value);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(formSubmit),
        b: common_vendor.o(formReset)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo-form/demo-form.js.map
