"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5-10-watch",
  setup(__props) {
    let name = common_vendor.ref("");
    let age = common_vendor.ref();
    let people = common_vendor.ref({
      name: "李四",
      age: 26
    });
    common_vendor.watch([name, age], ([newName, newAge], [oldName, oldAge]) => {
      common_vendor.index.__f__("log", "at pages/demo5-10-watch/demo5-10-watch.vue:35", newName, newAge);
      common_vendor.index.__f__("log", "at pages/demo5-10-watch/demo5-10-watch.vue:36", oldName.oldAge);
    });
    common_vendor.watch(name, (newName, oldName) => {
      common_vendor.index.__f__("log", "at pages/demo5-10-watch/demo5-10-watch.vue:39", "新值：" + newName);
      common_vendor.index.__f__("log", "at pages/demo5-10-watch/demo5-10-watch.vue:40", "旧值：" + oldName);
    });
    common_vendor.watch(() => people.value.name, (newName) => {
      common_vendor.index.__f__("log", "at pages/demo5-10-watch/demo5-10-watch.vue:45", "新值：" + newName);
    });
    common_vendor.watch(() => people, (newName) => {
      common_vendor.index.__f__("log", "at pages/demo5-10-watch/demo5-10-watch.vue:55", "新值：" + newName.value.name);
    }, { deep: true, immediate: true });
    common_vendor.watchEffect(() => {
      common_vendor.index.__f__("log", "at pages/demo5-10-watch/demo5-10-watch.vue:67", name.value);
      common_vendor.index.__f__("log", "at pages/demo5-10-watch/demo5-10-watch.vue:68", age.value);
      common_vendor.index.__f__("log", "at pages/demo5-10-watch/demo5-10-watch.vue:69", people);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(name),
        b: common_vendor.o(($event) => common_vendor.isRef(name) ? name.value = $event.detail.value : name = $event.detail.value),
        c: common_vendor.t(common_vendor.unref(name)),
        d: common_vendor.unref(age),
        e: common_vendor.o(($event) => common_vendor.isRef(age) ? age.value = $event.detail.value : age = $event.detail.value),
        f: common_vendor.t(common_vendor.unref(age)),
        g: common_vendor.unref(people).name,
        h: common_vendor.o(($event) => common_vendor.unref(people).name = $event.detail.value),
        i: common_vendor.t(common_vendor.unref(people))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo5-10-watch/demo5-10-watch.js.map
