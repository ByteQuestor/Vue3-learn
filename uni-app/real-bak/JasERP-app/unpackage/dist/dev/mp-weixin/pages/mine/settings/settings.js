"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "settings",
  setup(__props) {
    const allModules = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      common_vendor.index.__f__("log", "at pages/mine/settings/settings.vue:20", "进入设置");
      const defaultConfig = {
        purchase: true,
        sell: true,
        print: true
      };
      const savedConfig = common_vendor.index.getStorageSync("moduleConfig") || defaultConfig;
      allModules.value = [
        {
          id: "purchase",
          label: "进货",
          enabled: savedConfig.purchase
        },
        {
          id: "sell",
          label: "卖货",
          enabled: savedConfig.sell
        },
        {
          id: "print",
          label: "打印",
          enabled: savedConfig.print
        }
      ];
    });
    const toggleModule = (moduleId, event) => {
      const newValue = event.detail.value;
      const module = allModules.value.find((m) => m.id === moduleId);
      if (module) {
        module.enabled = newValue;
        saveConfig();
      }
    };
    const saveConfig = () => {
      const config = allModules.value.reduce((acc, cur) => {
        acc[cur.id] = cur.enabled;
        return acc;
      }, {});
      common_vendor.index.setStorageSync("moduleConfig", config);
    };
    common_vendor.onHide(() => {
      saveConfig();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(allModules.value, (module, k0, i0) => {
          return {
            a: common_vendor.t(module.label),
            b: module.enabled,
            c: common_vendor.o(($event) => toggleModule(module.id, $event), module.id),
            d: module.id
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/mine/settings/settings.js.map
