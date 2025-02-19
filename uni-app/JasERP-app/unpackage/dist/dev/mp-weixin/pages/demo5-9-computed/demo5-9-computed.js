"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5-9-computed",
  setup(__props) {
    let students = common_vendor.ref([
      { id: 1001, name: "李思思", score: 90, kemu: "语文" },
      { id: 1002, name: "李四", score: 95, kemu: "数学" },
      { id: 1003, name: "王子阳", score: 85, kemu: "理综" },
      { id: 1004, name: "刘能", score: 60, kemu: "英语" }
    ]);
    let total = common_vendor.computed(() => {
      let sum = 0;
      students.value.forEach((item) => {
        sum = item.score + sum;
      });
      return sum;
    });
    function computedSum() {
      let sumScore = 0;
      sumScore = 0;
      students.value.forEach((item) => {
        sumScore = item.score + sumScore;
      });
      return sumScore;
    }
    function remove(index) {
      common_vendor.index.__f__("log", "at pages/demo5-9-computed/demo5-9-computed.vue:57", index);
      students.value.splice(index, 1);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(students), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.score),
            d: item.id
          };
        }),
        b: common_vendor.f(common_vendor.unref(students), (item, index, i0) => {
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
        }),
        c: common_vendor.t(common_vendor.unref(total)),
        d: common_vendor.t(computedSum())
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo5-9-computed/demo5-9-computed.js.map
