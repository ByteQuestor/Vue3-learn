"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo-button",
  setup(__props) {
    function submit() {
      common_vendor.index.showToast({
        title: "提交成功"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(submit)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo-button/demo-button.js.map
