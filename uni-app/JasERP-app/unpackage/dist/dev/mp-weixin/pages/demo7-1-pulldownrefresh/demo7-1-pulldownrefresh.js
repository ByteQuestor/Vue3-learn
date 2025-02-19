"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo7-1-pulldownrefresh",
  setup(__props) {
    common_vendor.onPullDownRefresh(() => {
      common_vendor.index.__f__("log", "at pages/demo7-1-pulldownrefresh/demo7-1-pulldownrefresh.vue:10", "下拉刷新，请求数据");
    });
    common_vendor.onReachBottom(() => {
      common_vendor.index.__f__("log", "at pages/demo7-1-pulldownrefresh/demo7-1-pulldownrefresh.vue:14", "执行了触底加载");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(100, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo7-1-pulldownrefresh/demo7-1-pulldownrefresh.js.map
