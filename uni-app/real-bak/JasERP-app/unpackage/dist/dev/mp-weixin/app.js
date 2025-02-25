"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/data/data.js";
  "./pages/abbr/abbr.js";
  "./pages/mine/mine.js";
  "./pages/mine/settings/settings.js";
  "./pages/index/sale/sale.js";
  "./pages/index/buy/buy.js";
  "./pages/index/client/client.js";
  "./pages/index/supperliers/supperliers.js";
  "./pages/index/productions/productions.js";
  "./pages/index/cost/cost.js";
  "./pages/index/returngoods/returngoods.js";
  "./pages/index/inventory/inventory.js";
  "./pages/testPages/dumpForm/dumpForm.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:7", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
