(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/htz-image-upload/htz-image-upload"],{

/***/ 503:
/*!**********************************************************************!*\
  !*** D:/nature-app/components/htz-image-upload/htz-image-upload.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _htz_image_upload_vue_vue_type_template_id_40a23b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htz-image-upload.vue?vue&type=template&id=40a23b44& */ 504);
/* harmony import */ var _htz_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htz-image-upload.vue?vue&type=script&lang=js& */ 506);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _htz_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _htz_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _htz_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htz-image-upload.vue?vue&type=style&index=0&lang=css& */ 508);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _htz_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _htz_image_upload_vue_vue_type_template_id_40a23b44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _htz_image_upload_vue_vue_type_template_id_40a23b44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _htz_image_upload_vue_vue_type_template_id_40a23b44___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/htz-image-upload/htz-image-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 504:
/*!*****************************************************************************************************!*\
  !*** D:/nature-app/components/htz-image-upload/htz-image-upload.vue?vue&type=template&id=40a23b44& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_template_id_40a23b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./htz-image-upload.vue?vue&type=template&id=40a23b44& */ 505);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_template_id_40a23b44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_template_id_40a23b44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_template_id_40a23b44___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_template_id_40a23b44___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 505:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/nature-app/components/htz-image-upload/htz-image-upload.vue?vue&type=template&id=40a23b44& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.uploadLists, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 = /.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(item)
    return {
      $orig: $orig,
      g0: g0,
    }
  })
  var g1 = _vm.uploadLists.length < _vm.max && _vm.add
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 506:
/*!***********************************************************************************************!*\
  !*** D:/nature-app/components/htz-image-upload/htz-image-upload.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./htz-image-upload.vue?vue&type=script&lang=js& */ 507);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 507:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/nature-app/components/htz-image-upload/htz-image-upload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var helangCompress = function helangCompress() {
  Promise.all(/*! require.ensure | components/htz-image-upload/helang-compress/helang-compress */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/htz-image-upload/helang-compress/helang-compress")]).then((function () {
    return resolve(__webpack_require__(/*! ./helang-compress/helang-compress.vue */ 624));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default2 = {
  components: {
    helangCompress: helangCompress
  },
  name: 'htz-image-upload',
  props: {
    max: {
      //展示图片最大值
      type: Number,
      default: 1
    },
    chooseNum: {
      //选择图片数
      type: Number,
      default: 9
    },
    name: {
      //发到后台的文件参数名
      type: String,
      default: 'file'
    },
    remove: {
      //是否展示删除按钮
      type: Boolean,
      default: true
    },
    add: {
      //是否展示添加按钮
      type: Boolean,
      default: true
    },
    disabled: {
      //是否禁用
      type: Boolean,
      default: false
    },
    sourceType: {
      //选择照片来源 【ps：H5就别费劲了，设置了也没用。不是我说的，官方文档就这样！！！】
      type: Array,
      default: function _default() {
        return ['album', 'camera'];
      }
    },
    action: {
      //上传地址
      type: String,
      default: ''
    },
    headers: {
      //上传的请求头部
      type: Object,
      default: function _default() {}
    },
    formData: {
      //HTTP 请求中其他额外的 form data
      type: Object,
      default: function _default() {}
    },
    compress: {
      //是否需要压缩
      type: Boolean,
      default: true
    },
    quality: {
      //压缩质量，范围0～100
      type: Number,
      default: 80
    },
    value: {
      //受控图片列表
      type: Array,
      default: function _default() {
        return [];
      }
    },
    uploadSuccess: {
      default: function _default(res) {
        return {
          success: false,
          url: ''
        };
      }
    },
    mediaType: {
      //文件类型 image/video/all
      type: String,
      default: 'image'
    },
    maxDuration: {
      //拍摄视频最长拍摄时间，单位秒。最长支持 60 秒。 (只针对拍摄视频有用)
      type: Number,
      default: 60
    },
    camera: {
      //'front'、'back'，默认'back'(只针对拍摄视频有用)
      type: String,
      default: 'back'
    }
  },
  data: function data() {
    return {
      uploadLists: [],
      mediaTypeData: ['image', 'video', 'all'],
      previewVideoSrc: '',
      params: {
        maxSize: 750,
        fileType: 'png',
        quality: 1,
        minSize: 600
      }
      // cWidth: 0,
      // cHeight: 0,
      // cw: uni.getSystemInfoSync().windowWidth
    };
  },

  mounted: function mounted() {
    console.log(this.cw);
    this.$nextTick(function () {
      this.uploadLists = this.value;
      if (this.mediaTypeData.indexOf(this.mediaType) == -1) {
        uni.showModal({
          title: '提示',
          content: 'mediaType参数不正确',
          showCancel: false,
          success: function success(res) {
            if (res.confirm) {
              //console.log('用户点击确定');
            } else if (res.cancel) {
              //console.log('用户点击取消');
            }
          }
        });
      }
    });
  },
  watch: {
    value: function value(val, oldVal) {
      //console.log('value',val, oldVal)
      this.uploadLists = val;
    }
  },
  methods: {
    previewVideo: function previewVideo(src) {
      this.previewVideoSrc = src;
    },
    previewVideoClose: function previewVideoClose() {
      this.previewVideoSrc = '';
      console.log('previewVideoClose', this.previewVideoSrc);
    },
    imgDel: function imgDel(index) {
      var _this = this;
      uni.showModal({
        title: '提示',
        content: '您确定要删除么?',
        success: function success(res) {
          if (res.confirm) {
            var delUrl = _this.uploadLists[index];
            _this.uploadLists.splice(index, 1);
            _this.$emit("input", _this.uploadLists);
            _this.$emit("imgDelete", {
              del: delUrl,
              tempFilePaths: _this.uploadLists
            });
          } else if (res.cancel) {}
        }
      });
    },
    imgPreview: function imgPreview(index) {
      var imgData = this.uploadLists.filter(function (item) {
        return /.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(item);
      }); //只预览图片的
      console.log("imgData : " + imgData);
      uni.previewImage({
        urls: imgData,
        current: index,
        loop: true
      });
    },
    chooseFile: function chooseFile() {
      var _this2 = this;
      if (this.disabled) {
        return false;
      }
      switch (this.mediaTypeData.indexOf(this.mediaType)) {
        case 1:
          //视频
          this.videoAdd();
          break;
        case 2:
          //全部
          uni.showActionSheet({
            itemList: ['相册', '视频'],
            success: function success(res) {
              if (res.tapIndex == 1) {
                _this2.videoAdd();
              } else if (res.tapIndex == 0) {
                _this2.imgAdd();
              }
            },
            fail: function fail(res) {
              console.log(res.errMsg);
            }
          });
          break;
        default:
          //图片
          this.imgAdd();
          break;
      }
    },
    videoAdd: function videoAdd() {
      var _this3 = this;
      console.log('videoAdd');
      var nowNum = Math.abs(this.uploadLists.length - this.max);
      var thisNum = this.chooseNum > nowNum ? nowNum : this.chooseNum; //可选数量
      uni.chooseVideo({
        compressed: this.compress,
        sourceType: this.sourceType,
        camera: this.camera,
        maxDuration: this.maxDuration,
        success: function success(res) {
          console.log('videoAdd', res);
          console.log(res.tempFilePath);
          _this3.chooseSuccessMethod([res.tempFilePath], 1);
        }
      });
    },
    imgAdd: function imgAdd() {
      var _this4 = this;
      console.log('imgAdd');
      var nowNum = Math.abs(this.uploadLists.length - this.max);
      var thisNum = this.chooseNum > nowNum ? nowNum : this.chooseNum; //可选数量
      console.log('nowNum', nowNum);
      console.log('thisNum', thisNum);
      uni.chooseImage({
        count: thisNum,
        sizeType: ['compressed'],
        //可以指定是原图还是压缩图，默认二者都有original
        sourceType: this.sourceType,
        success: function success(res) {
          _this4.chooseSuccessMethod(res.tempFilePaths, 0);
        }
      });
    },
    appCamera: function appCamera() {
      var _this5 = this;
      var cmr = plus.camera.getCamera();
      var res = cmr.supportedImageResolutions[0];
      var fmt = cmr.supportedImageFormats[0];
      cmr.captureImage(function (path) {
        _this5.chooseSuccessMethod([path], 0);
      }, function (error) {
        console.log("Capture image failed: " + error.message);
      }, {
        resolution: res,
        format: fmt
      });
    },
    appGallery: function appGallery(maxNum) {
      var _this6 = this;
      plus.gallery.pick(function (res) {
        _this6.chooseSuccessMethod(res.files, 0);
      }, function (e) {
        //console.log("取消选择图片");
      }, {
        filter: "image",
        multiple: true,
        maximum: maxNum
      });
    },
    chooseSuccessMethod: function chooseSuccessMethod(filePaths, type) {
      if (this.action == '') {
        //未配置上传路径
        this.$emit("chooseSuccess", filePaths, type); //filePaths 路径 type 0 为图片 1为视频
      } else {
        if (type == 1) {
          this.imgUpload(filePaths);
        } else {
          if (this.compress) {
            //设置了需要压缩
            this.imgCompress(filePaths);
          } else {
            this.imgUpload(filePaths);
          }
        }
      }
    },
    imgCompress: function imgCompress(tempFilePaths) {
      var _this7 = this;
      uni.showLoading({
        title: '压缩中...'
      });
      var that = this;
      this.$refs.helangCompress.batchCompress({
        batchSrc: tempFilePaths,
        maxSize: this.params.maxSize,
        fileType: this.params.fileType,
        quality: this.params.quality,
        minSize: this.params.minSize,
        progress: function progress(res) {
          uni.showLoading({
            title: "\u8FDB\u5EA6:".concat(res.done + res.fail, "/").concat(res.count)
          });
          console.log(res);
        }
      }).then(function (res) {
        uni.hideLoading();
        uni.showToast({
          title: "压缩完成",
          icon: "success"
        });
        wx.getFileInfo({
          filePath: res,
          success: function success(res) {
            console.log('压缩后: ' + res.size / 1024 + 'kb');
          }
        });
        _this7.imgUpload(res);
      }).catch(function (err) {
        uni.hideLoading();
        uni.showToast({
          title: "压缩失败",
          icon: "none"
        });
      });
    },
    imgUpload: function imgUpload(tempFilePaths) {
      var _this8 = this;
      uni.showLoading({
        title: '上传中'
      });
      console.log('imgUpload', tempFilePaths);
      var uploadImgs = [];
      tempFilePaths.forEach(function (item, index) {
        uploadImgs.push(new Promise(function (resolve, reject) {
          console.log(index, item);
          var uploadTask = uni.uploadFile({
            url: _this8.action,
            //仅为示例，非真实的接口地址
            filePath: item,
            name: _this8.name,
            fileType: 'image',
            formData: _this8.formData,
            header: _this8.headers,
            success: function success(uploadFileRes) {
              if (typeof _this8.uploadSuccess == 'function') {
                if (_this8.uploadSuccess(uploadFileRes).success) {
                  _this8.value.push(_this8.uploadSuccess(uploadFileRes).url);
                  _this8.$emit("input", _this8.uploadLists);
                }
              }
              resolve(uploadFileRes);
              _this8.$emit("uploadSuccess", uploadFileRes);
            },
            fail: function fail(err) {
              console.log(err);
              //uni.hideLoading();
              reject(err);
              _this8.$emit("uploadFail", err);
            },
            complete: function complete() {}
          });
        }));
      });
      Promise.all(uploadImgs) //执行所有需请求的接口
      .then(function (results) {
        uni.hideLoading();
      }).catch(function (res, object) {
        uni.hideLoading();
        _this8.$emit("uploadFail", res);
      });
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 508:
/*!*******************************************************************************************************!*\
  !*** D:/nature-app/components/htz-image-upload/htz-image-upload.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./htz-image-upload.vue?vue&type=style&index=0&lang=css& */ 509);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_htz_image_upload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 509:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/nature-app/components/htz-image-upload/htz-image-upload.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/htz-image-upload/htz-image-upload.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/htz-image-upload/htz-image-upload-create-component',
    {
        'components/htz-image-upload/htz-image-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(503))
        })
    },
    [['components/htz-image-upload/htz-image-upload-create-component']]
]);
