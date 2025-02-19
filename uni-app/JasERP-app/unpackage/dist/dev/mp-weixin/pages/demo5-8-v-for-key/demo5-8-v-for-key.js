"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5-8-v-for-key",
  setup(__props) {
    let students = common_vendor.ref([
      { id: 1001, name: "李思思", score: 90 },
      { id: 1002, name: "李四", score: 95 },
      { id: 1003, name: "王子阳", score: 85 },
      { id: 1004, name: "刘能", score: 60 }
    ]);
    function remove(index) {
      common_vendor.index.__f__("log", "at pages/demo5-8-v-for-key/demo5-8-v-for-key.vue:32", index);
      students.value.splice(index, 1);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.t(item),
            c: index
          };
        }),
        b: common_vendor.f(common_vendor.unref(students), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.score),
            d: item.id
          };
        }),
        c: common_vendor.f(common_vendor.unref(students), (item, index, i0) => {
          return common_vendor.e({
            a: item.score > 10
          }, item.score > 10 ? {
            b: common_vendor.t(item.id),
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.score),
            e: common_vendor.o(($event) => remove(index), item.id)
          } : {}, {
            f: item.id
          });
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo5-8-v-for-key/demo5-8-v-for-key.js.map
