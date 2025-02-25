"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "productions",
  setup(__props) {
    const categories = common_vendor.ref([
      {
        id: 1,
        name: "数码产品",
        products: [
          {
            id: 1,
            name: "智能手机",
            description: "最新款旗舰手机",
            price: 5999
          },
          {
            id: 2,
            name: "笔记本电脑",
            description: "高性能游戏本",
            price: 8999
          },
          {
            id: 3,
            name: "无线耳机",
            description: "降噪蓝牙耳机",
            price: 1299
          }
        ]
      },
      {
        id: 2,
        name: "家用电器",
        products: [
          {
            id: 4,
            name: "智能电视",
            description: "4K超高清电视",
            price: 3999
          },
          {
            id: 5,
            name: "冰箱",
            description: "双开门节能冰箱",
            price: 5999
          }
        ]
      },
      {
        id: 3,
        name: "服装配饰",
        products: [
          {
            id: 6,
            name: "男士夹克",
            description: "春秋季休闲外套",
            price: 399
          },
          {
            id: 7,
            name: "女士手提包",
            description: "时尚真皮包包",
            price: 899
          }
        ]
      },
      {
        id: 4,
        name: "图书音像",
        products: [
          {
            id: 8,
            name: "Vue3实战指南",
            description: "前端开发必备",
            price: 89
          },
          {
            id: 9,
            name: "古典音乐CD",
            description: "大师经典作品集",
            price: 129
          }
        ]
      }
    ]);
    const selectedCategory = common_vendor.ref(null);
    const showAll = common_vendor.ref(true);
    const totalProducts = common_vendor.computed(() => {
      return categories.value.reduce((total, category) => total + category.products.length, 0);
    });
    common_vendor.onNavigationBarButtonTap((e) => {
      if (e.text === "搜索") {
        common_vendor.index.__f__("log", "at pages/index/productions/productions.vue:131", "提交按钮被点击");
      } else if (e.text === "新增") {
        common_vendor.index.__f__("log", "at pages/index/productions/productions.vue:134", "保存按钮被点击");
      }
    });
    const filteredProducts = common_vendor.computed(() => {
      if (showAll.value) {
        return categories.value.flatMap((category) => category.products);
      }
      if (selectedCategory.value) {
        return selectedCategory.value.products;
      }
      return [];
    });
    const handleCategoryClick = (category) => {
      selectedCategory.value = category;
      showAll.value = false;
    };
    const handleShowAll = () => {
      showAll.value = true;
      selectedCategory.value = null;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(totalProducts.value),
        b: common_vendor.o(handleShowAll),
        c: common_vendor.f(categories.value, (category, index, i0) => {
          var _a;
          return {
            a: common_vendor.t(category.name),
            b: common_vendor.t(category.products.length),
            c: index,
            d: common_vendor.o(($event) => handleCategoryClick(category), index),
            e: ((_a = selectedCategory.value) == null ? void 0 : _a.id) === category.id ? 1 : ""
          };
        }),
        d: common_vendor.f(filteredProducts.value, (product, k0, i0) => {
          return {
            a: common_vendor.t(product.name),
            b: common_vendor.t(product.description),
            c: common_vendor.t(product.price.toFixed(2)),
            d: product.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-182da60a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/productions/productions.js.map
