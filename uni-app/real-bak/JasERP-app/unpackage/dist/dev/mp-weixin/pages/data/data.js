"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "data",
  setup(__props) {
    const allModules = common_vendor.ref([
      {
        id: "purchase",
        label: "进货",
        enabled: true
      },
      {
        id: "sell",
        label: "卖货",
        enabled: true
      },
      {
        id: "print",
        label: "打印",
        enabled: true
      }
    ]);
    const activeModules = common_vendor.computed(() => {
      return allModules.value.filter((module) => module.enabled);
    });
    common_vendor.onShow(() => {
      reSetModule();
    });
    common_vendor.onLaunch(() => {
      reSetModule();
    });
    function reSetModule() {
      const savedConfig = common_vendor.index.getStorageSync("moduleConfig");
      common_vendor.index.__f__("log", "at pages/data/data.vue:52", savedConfig);
      if (savedConfig) {
        allModules.value = allModules.value.map((module) => ({
          ...module,
          enabled: savedConfig[module.id] ?? module.enabled
        }));
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(activeModules.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: item.id
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/data/data.js.map
