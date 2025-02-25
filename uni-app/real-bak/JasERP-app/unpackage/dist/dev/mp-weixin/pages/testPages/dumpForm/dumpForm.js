"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src1: "",
      //放置预览图1
      src2: "",
      //放置预览图2
      show: true,
      start: null,
      //判断是300还说400，控制input框
      fileList1: [],
      fileList2: [],
      // imageValue: [],
      // 表单数据
      formData: {
        projectName: "",
        //名称
        projectModel: "",
        //规格
        weight: null,
        //重量
        goodsNumber: "",
        //数量
        imageOne: "",
        imageTow: ""
      },
      rules: {
        // 对projectName字段进行必填验证
        projectName: {
          rules: [{
            required: true,
            errorMessage: "请输入产品名称"
          }]
        },
        // 对规格字段进行必填验证
        projectModel: {
          rules: [{
            required: true,
            errorMessage: "请输入规格"
          }]
        },
        //对数量字段进行必填验证
        goodsNumber: {
          rules: [{
            required: true,
            errorMessage: "请输入数量"
          }]
        }
      }
    };
  },
  onLoad(a) {
    var userdatas = common_vendor.index.getStorageSync("userdatas");
    common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:104", "neicun");
    this.formData.projectModel = userdatas.projectModel;
    this.formData.projectName = userdatas.projectName;
    if (a.query === "300") {
      this.start = 300;
    }
  },
  methods: {
    // 触发提交表单
    submit() {
      var that = this;
      this.$refs.form.validate().then(async (res) => {
        common_vendor.index.showLoading({
          title: "加载中"
        });
        common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:120", "表单数据信息：", res, 1);
        common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:121", this.fileList1.length, this.fileList2.length);
        common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:122", this.formData.imageOne, this.formData.imageTow);
        if (this.formData.imageOne === "" || this.formData.imageTow === "") {
          common_vendor.index.showToast({
            title: "需要上传图片",
            duration: 2e3
          });
          return;
        } else {
          common_vendor.index.request({
            url: "",
            //接口路径
            method: "POST",
            data: {
              projectName: res.projectName,
              //名称
              projectModel: res.projectModel,
              //规格
              weight: res.weight,
              //重量
              goodsNumber: parseInt(res.goodsNumber),
              //数量
              imageOne: res.imageOne,
              imageTow: res.imageTow
            },
            header: {
              "Authorization": common_vendor.index.getStorageSync("token"),
              "content-type": "application/x-www-form-urlencoded"
              //自定义请求头信息
            },
            success(res2) {
              common_vendor.index.hideLoading();
              common_vendor.index.removeStorageSync("userdatas");
              common_vendor.index.navigateBack({
                delta: 1
              });
              that.formData = {};
              that.fileList1 = [];
              that.fileList2 = [];
            }
          });
        }
      }).catch((err) => {
        common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:160", "表单错误信息：", err);
      });
    },
    // 删除图片
    deletePic(event) {
      var ids = JSON.parse(event.file.url.data).id;
      common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:170", event, "删除");
      common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:171", JSON.parse(event.file.url.data).id);
      this[`fileList${event.name}`].splice(event.index, 1);
      common_vendor.index.request({
        url: "",
        method: "DELETE",
        header: {
          "Authorization": common_vendor.index.getStorageSync("token")
        },
        data: [ids],
        success: (res) => {
          this.fileList1 = "";
        }
      });
    },
    // 新增图片
    async afterRead(event) {
      let lists = [].concat(event.file);
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中"
        });
      });
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i], event);
        common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:202", result, "f");
        let item = this[`fileList${event.name}`][fileListLen];
        this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
          status: "success",
          message: "",
          url: result
        }));
        fileListLen++;
      }
    },
    uploadFilePromise(url, event) {
      common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:213", event, "event");
      return new Promise((resolve, reject) => {
        common_vendor.index.uploadFile({
          url: "",
          //仅为示例，非真实的接口地址
          header: {
            "Authorization": common_vendor.index.getStorageSync("token"),
            "content-type": "multipart/form-data"
          },
          filePath: url.thumb,
          //＜（＾－＾）＞本地路径
          name: "file",
          //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
          success: (uploadFileRes) => {
            common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:224", uploadFileRes, "kasidjasijdiasjd");
            if (event.name === "1") {
              setTimeout(() => {
                var img = JSON.parse(uploadFileRes.data);
                common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:228", img, "img");
                this.formData.imageOne = //拼接图片路径
                "http://192.168.10.19:8081/api/localStorage/pictures" + img.realName;
                common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:233", this.formData.imageOne);
                resolve(uploadFileRes);
              }, 1e3);
            } else {
              setTimeout(() => {
                var img = JSON.parse(uploadFileRes.data);
                common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:239", img, "img");
                this.formData.imageTow = "http://192.168.10.19:8081/api/localStorage/pictures" + img.realName;
                common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:244", this.formData.imageTow);
                resolve(uploadFileRes);
              }, 1e3);
            }
          }
        });
      });
    },
    // 删除图片
    deletePic2(event) {
      common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:258", event, "删除2");
      common_vendor.index.__f__("log", "at pages/testPages/dumpForm/dumpForm.vue:259", JSON.parse(event.file.url.data).id);
      var ids = JSON.parse(event.file.url.data).id;
      this[`fileList${event.name}`].splice(event.index, 1);
      common_vendor.index.request({
        url: "",
        method: "DELETE",
        header: {
          "Authorization": common_vendor.index.getStorageSync("token")
        },
        data: [ids],
        success: (res) => {
          this.fileList2 = "";
          this.formData.imageTow = "";
        }
      });
    },
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
if (!Array) {
  const _component_uni_nav_bar = common_vendor.resolveComponent("uni-nav-bar");
  const _component_uni_easyinput = common_vendor.resolveComponent("uni-easyinput");
  const _component_uni_forms_item = common_vendor.resolveComponent("uni-forms-item");
  const _component_u_upload = common_vendor.resolveComponent("u-upload");
  const _component_uni_forms = common_vendor.resolveComponent("uni-forms");
  const _component_u_button = common_vendor.resolveComponent("u-button");
  (_component_uni_nav_bar + _component_uni_easyinput + _component_uni_forms_item + _component_u_upload + _component_uni_forms + _component_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.back),
    b: common_vendor.p({
      dark: true,
      fixed: true,
      shadow: true,
      ["background-color"]: "#1f2a66",
      ["status-bar"]: true,
      ["left-icon"]: "left",
      ["left-text"]: "返回",
      title: "手动上传",
      color: "#fff"
    }),
    c: common_vendor.o(($event) => $data.formData.projectName = $event),
    d: common_vendor.p({
      type: "text",
      placeholder: "请输入产品名称",
      disabled: $data.start === 300,
      modelValue: $data.formData.projectName
    }),
    e: common_vendor.p({
      label: "产品名:",
      name: "projectName"
    }),
    f: common_vendor.o(($event) => $data.formData.projectModel = $event),
    g: common_vendor.p({
      type: "text",
      placeholder: "请输入规格",
      disabled: $data.start === 300,
      modelValue: $data.formData.projectModel
    }),
    h: common_vendor.p({
      label: "规 格:",
      name: "projectModel"
    }),
    i: common_vendor.o(($event) => $data.formData.weight = $event),
    j: common_vendor.p({
      type: "text",
      placeholder: "请输入重量",
      modelValue: $data.formData.weight
    }),
    k: common_vendor.p({
      label: "重 量:",
      name: "weight"
    }),
    l: common_vendor.o(($event) => $data.formData.goodsNumber = $event),
    m: common_vendor.p({
      type: "text",
      placeholder: "请输入件数",
      modelValue: $data.formData.goodsNumber
    }),
    n: common_vendor.p({
      label: "件 数:",
      name: "goodsNumber"
    }),
    o: $data.src2,
    p: common_vendor.o($options.afterRead),
    q: common_vendor.o($options.deletePic),
    r: common_vendor.p({
      fileList: $data.fileList1,
      name: "1",
      multiple: true,
      previewFullImage: true,
      width: "250",
      height: "250",
      maxCount: 1
    }),
    s: common_vendor.p({
      name: "imageOne"
    }),
    t: $data.src1,
    v: common_vendor.o($options.afterRead),
    w: common_vendor.o($options.deletePic),
    x: common_vendor.p({
      fileList: $data.fileList2,
      name: "2",
      multiple: false,
      previewFullImage: false,
      width: "250",
      height: "250",
      maxCount: 1
    }),
    y: common_vendor.p({
      name: "imageTow"
    }),
    z: common_vendor.sr("form", "41190e00-1"),
    A: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    B: common_vendor.o($options.submit),
    C: common_vendor.p({
      text: "提交",
      color: "#1f2a66"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/testPages/dumpForm/dumpForm.js.map
