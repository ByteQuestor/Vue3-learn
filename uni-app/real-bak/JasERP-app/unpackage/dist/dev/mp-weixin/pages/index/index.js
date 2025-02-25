"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
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
    common_vendor.computed(() => {
      return allModules.value.filter((module) => module.enabled);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(common_assets.saleIcon),
        b: common_vendor.unref(common_assets.buyIcon),
        c: common_vendor.unref(common_assets.clientIcon),
        d: common_vendor.unref(common_assets.suppliersIcon),
        e: common_vendor.unref(common_assets.productionsIcon),
        f: common_vendor.unref(common_assets.inventoryIcon),
        g: common_vendor.unref(common_assets.cost),
        h: common_vendor.unref(common_assets.returngoodsIcon)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
