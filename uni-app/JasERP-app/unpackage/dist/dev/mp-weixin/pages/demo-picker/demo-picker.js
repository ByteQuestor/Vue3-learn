"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo-picker",
  setup(__props) {
    let index = common_vendor.ref();
    let date = common_vendor.ref();
    let time = common_vendor.ref();
    let rangeList = ["计算机", "会计", "大数据", "土木工程"];
    function getIndex(event) {
      common_vendor.index.__f__("log", "at pages/demo-picker/demo-picker.vue:26", event.detail.vue);
      common_vendor.index.__f__("log", "at pages/demo-picker/demo-picker.vue:27", rangeList[event.detail.value]);
      index.value = event.detail.value;
    }
    function getDate(event) {
      common_vendor.index.__f__("log", "at pages/demo-picker/demo-picker.vue:31", event.detail.value);
      date.value = event.detail.value;
    }
    function getTime(event) {
      common_vendor.index.__f__("log", "at pages/demo-picker/demo-picker.vue:35", event.detail.value);
      time.value = event.detail.value;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(getIndex),
        b: common_vendor.unref(rangeList),
        c: common_vendor.t(common_vendor.unref(rangeList)[common_vendor.unref(index)]),
        d: common_vendor.o(getDate),
        e: common_vendor.t(common_vendor.unref(date)),
        f: common_vendor.o(getTime),
        g: common_vendor.t(common_vendor.unref(time))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo-picker/demo-picker.js.map
