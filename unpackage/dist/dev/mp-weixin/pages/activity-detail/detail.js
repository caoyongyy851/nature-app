(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/activity-detail/detail"],{

/***/ 144:
/*!*************************************************************************!*\
  !*** D:/nature-app/main.js?{"page":"pages%2Factivity-detail%2Fdetail"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/activity-detail/detail.vue */ 145));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 145:
/*!******************************************************!*\
  !*** D:/nature-app/pages/activity-detail/detail.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_6d6ede6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=6d6ede6c& */ 146);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 148);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=css& */ 150);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_6d6ede6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_6d6ede6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_6d6ede6c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/activity-detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 146:
/*!*************************************************************************************!*\
  !*** D:/nature-app/pages/activity-detail/detail.vue?vue&type=template&id=6d6ede6c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_6d6ede6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=6d6ede6c& */ 147);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_6d6ede6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_6d6ede6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_6d6ede6c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_6d6ede6c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 147:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/nature-app/pages/activity-detail/detail.vue?vue&type=template&id=6d6ede6c& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uNoticeBar: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-notice-bar/u-notice-bar */ "node-modules/uview-ui/components/u-notice-bar/u-notice-bar").then(__webpack_require__.bind(null, /*! uview-ui/components/u-notice-bar/u-notice-bar.vue */ 520))
    },
    uToast: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-toast/u-toast */ "node-modules/uview-ui/components/u-toast/u-toast").then(__webpack_require__.bind(null, /*! uview-ui/components/u-toast/u-toast.vue */ 349))
    },
    uCircleProgress: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-circle-progress/u-circle-progress */ "node-modules/uview-ui/components/u-circle-progress/u-circle-progress").then(__webpack_require__.bind(null, /*! uview-ui/components/u-circle-progress/u-circle-progress.vue */ 527))
    },
    uIcon: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-icon/u-icon */ "node-modules/uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! uview-ui/components/u-icon/u-icon.vue */ 363))
    },
    uModal: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-modal/u-modal */ "node-modules/uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! uview-ui/components/u-modal/u-modal.vue */ 382))
    },
    uPopup: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-popup/u-popup */ "node-modules/uview-ui/components/u-popup/u-popup").then(__webpack_require__.bind(null, /*! uview-ui/components/u-popup/u-popup.vue */ 451))
    },
    uLine: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-line/u-line */ "node-modules/uview-ui/components/u-line/u-line").then(__webpack_require__.bind(null, /*! uview-ui/components/u-line/u-line.vue */ 437))
    },
    uNumberBox: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-number-box/u-number-box */ "node-modules/uview-ui/components/u-number-box/u-number-box").then(__webpack_require__.bind(null, /*! uview-ui/components/u-number-box/u-number-box.vue */ 444))
    },
    uInput: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-input/u-input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-input/u-input")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-input/u-input.vue */ 496))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.authModal.show = false
    }
    _vm.e1 = function ($event) {
      _vm.authPhoneShow = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 148:
/*!*******************************************************************************!*\
  !*** D:/nature-app/pages/activity-detail/detail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 149);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 149:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/nature-app/pages/activity-detail/detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 63);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var uniPopup = function uniPopup() {
  __webpack_require__.e(/*! require.ensure | components/uni-ui/uni-popup/uni-popup */ "components/uni-ui/uni-popup/uni-popup").then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-ui/uni-popup/uni-popup.vue */ 458));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var uniNavBar = function uniNavBar() {
  __webpack_require__.e(/*! require.ensure | components/uni-ui/uni-nav-bar/uni-nav-bar */ "components/uni-ui/uni-nav-bar/uni-nav-bar").then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-ui/uni-nav-bar/uni-nav-bar.vue */ 375));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      id: '',
      activityDetail: {},
      comments: '',
      activityUserStatus: {},
      content: '',
      isLike: false,
      isJoin: false,
      join: {},
      imageList: ['/static/bgimg/3.jpg', '/static/demo/datapic/16.jpg'],
      current: 0,
      percent: 0,
      activeColor: '#fd5f40',
      authPhoneShow: false,
      qrcode: "",
      authModal: {
        show: false
      },
      joinModal: {
        show: false,
        person: 1,
        remark: ''
      },
      codeModal: {
        show: false
      },
      qrModal: {
        show: false
      },
      narList: ['WeEAST物与作为平台，只提供活动信息发布功能，活动的一切法律风险，由活动发起方负责，活动过程中的一切纠纷，与WeEAST物与平台无关。']
    };
  },
  components: {
    uniPopup: uniPopup,
    uniNavBar: uniNavBar
  },
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapGetters)(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase', 'getIsAuthPhone'])), {}, {
    getFinish: function getFinish() {
      if (new Date().getTime() > new Date(this.activityDetail.time).getTime() + 86400000 - 1) {
        return false;
      } else {
        return true;
      }
    }
  }),
  onLoad: function onLoad(options) {
    this.id = options.id;
    // this.id = '1426473061225357313'
    if (options.scene) {
      var scene = decodeURIComponent(options.scene).split('&');
      var secneObj = {};
      for (var i = 0; i < scene.length; i++) {
        var arr = scene[i].split('=');
        var key = arr[0];
        secneObj[key] = arr[1];
      }
      if (secneObj && secneObj.id) {
        this.id = secneObj.id;
      }
    }
    this.init();
  },
  onShow: function onShow(e) {
    console.log(JSON.stringify(e));
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: this.activityDetail.title,
      path: "/pages/play/play?isshare=1&sharePage=activityDetail&id=".concat(this.id),
      success: function success(res) {},
      fail: function fail(res) {}
    };
  },
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapActions)(['login', 'authUserInfo', 'setPhone'])), {}, {
    init: function init(data) {
      var _this = this;
      // 请求详情api
      this.$u.api.getActivityDetailById({
        id: this.id
      }).then(function (res) {
        _this.activityDetail = res.data;
        _this.activityDetail.imgsList = res.data.img.split(',');
        _this.activityDetail.imgsNum = _this.activityDetail.imgsList.length;
      });
      if (!this.getIsLogin) {
        this.login();
      }
      //获取评论
      this.getComments();
    },
    //获取评论
    getComments: function getComments() {
      var _this2 = this;
      //先获取用户的当前帖子状态
      this.$u.api.getActivityUserStatus({
        aid: this.id
      }).then(function (res) {
        _this2.activityUserStatus = res.data;
        _this2.isJoin = res.data.join ? true : false;
        _this2.join = res.data.join;
        _this2.isLike = res.data.appreciate;
        //获取评论
        _this2.$u.api.getCommentsByAid({
          aid: _this2.id
        }).then(function (res) {
          _this2.comments = res.data.map(function (item, index) {
            item.isZan = _this2.activityUserStatus.commentAppreciate[index];
            return item;
          });
        });
      });
    },
    // 监听swiper变化
    swiperChange: function swiperChange(e) {
      this.current = e.detail.current;
    },
    getPhoneNumber: function getPhoneNumber(e) {
      var _this3 = this;
      if (e.detail.errMsg == 'getPhoneNumber:ok') {
        uni.login({
          provider: 'weixin',
          success: function success(response) {
            _this3.$u.api.phone({
              encryptedData: e.detail.encryptedData,
              iv: e.detail.iv,
              appid: _vue.default.prototype.appid,
              code: response.code
            }).then(function (res) {
              if (res.code == 200) {
                _this3.setPhone(res.data.phoneNumber);
                _this3.authPhoneShow = false;
              } else {
                _this3.$refs.uToast.show({
                  type: 'warning',
                  title: '授权失败，请再试试~'
                });
                _this3.authPhoneShow = false;
              }
            });
          },
          fail: function fail(res) {
            _this3.authPhoneShow = false;
            _vue.default.prototype.$u.toast("获取code失败");
          }
        });
      } else {
        this.$refs.uToast.show({
          type: 'warning',
          title: '授权失败~'
        });
        this.authPhoneShow = false;
      }
    },
    // 报名
    joinActivity: function joinActivity() {
      var _this4 = this;
      if (this.getNeedAuth) {
        this.authModal.show = true;
        return;
      }
      if (this.isJoin) {
        // 取消报名
        this.$u.api.refundActOrder({
          id: this.join.id
        }).then(function (res) {
          if (res.code === 200) {
            _this4.isJoin = false;
            _this4.activityDetail.perLimit = _this4.activityDetail.perLimit - _this4.join.person;
          } else {
            _this4.$refs.uToast.show({
              type: 'warning',
              title: ' 取消报名失败~'
            });
          }
        });
      } else {
        if (!this.getIsAuthPhone) {
          this.authPhoneShow = true;
          return;
        }
        this.joinModal.show = true;
        return;
      }
    },
    // 写评论
    writeAComment: function writeAComment() {
      var _this5 = this;
      if (this.getNeedAuth) {
        this.authModal.show = true;
        return;
      }
      if (this.getNeedAuth) {
        this.authUserInfo();
        return;
      }
      if (!this.content) {
        this.$refs.uToast.show({
          type: 'warning',
          title: '评论不能为空哦~'
        });
        return;
      }
      this.$u.api.writeAComment({
        aid: this.id,
        content: this.content
      }).then(function (res) {
        console.log("评论成功");
        if (res.msg == '评论成功') {
          _this5.content = '';
          _this5.activityDetail.comments++;
          _this5.$refs.popup.close("bottom");
          _this5.getComments();
          _this5.$refs.uToast.show({
            type: 'success',
            title: '评论成功'
          });
        } else {
          _this5.$refs.uToast.show({
            type: 'error',
            title: '评论出错'
          });
        }
      });
    },
    toLike: function toLike() {
      var _this6 = this;
      if (this.getNeedAuth) {
        this.authModal.show = true;
        return;
      }
      if (this.isLike) {
        // 取消喜欢
        this.$u.api.activityAppreciateCancel({
          aid: this.id
        }).then(function (res) {
          if (res.code === 200) {
            _this6.isLike = false;
            _this6.activityDetail.likes--;
            // this.activityDetail.avatarLikes.splice(this.activityDetail.avatarLikes.findIndex(item =>
            // 	item === this.getUserinfo.avatar), 1)
          }
        });
      } else {
        // 喜欢
        this.$u.api.activityAppreciate({
          aid: this.id
        }).then(function (res) {
          if (res.code === 200) {
            _this6.isLike = true;
            _this6.activityDetail.likes++;
            // this.activityDetail.avatarLikes.push(this.getUserinfo.avatar)
            _this6.$refs.uToast.show({
              type: 'success',
              title: '谢谢你的喜欢~'
            });
          }
        });
      }
    },
    toggle: function toggle() {
      if (this.getNeedAuth) {
        this.authModal.show = true;
        return;
      }
      // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
      this.$refs.popup.open("bottom");
    },
    popupChange: function popupChange(e) {
      this.content = '';
    },
    //评论点赞
    commentAppreciate: function commentAppreciate(e) {
      if (this.getNeedAuth) {
        this.authModal.show = true;
        return;
      }
      if (e.isZan) {
        // 取消点赞
        this.$u.api.acommentAppreciateCancel({
          cid: e.id
        }).then(function (res) {
          if (res.code === 200) {
            e.isZan = false;
          }
        });
      } else {
        // 点赞
        this.$u.api.acommentAppreciate({
          cid: e.id
        }).then(function (res) {
          if (res.code === 200) {
            e.isZan = true;
          }
        });
      }
    },
    //进入评论区
    commentsDetail: function commentsDetail() {
      if (this.getNeedAuth) {
        this.authModal.show = true;
        return;
      }
      console.log("评论详情");
      uni.navigateTo({
        url: "comments?id=".concat(this.id)
      });
    },
    clickLeft: function clickLeft() {
      uni.navigateBack({
        delta: 1
      });
    },
    toIndex: function toIndex() {
      uni.switchTab({
        url: '../play/play'
      });
    },
    // 到个人中心
    openSpace: function openSpace(uid) {
      if (this.getNeedAuth) {
        this.authModal.show = true;
        return;
      }
      uni.navigateTo({
        url: "../user-space/user-space?uid=".concat(uid)
      });
    },
    toAuth: function toAuth() {
      var _this7 = this;
      if (this.getNeedAuth) {
        this.authUserInfo().then(function (res) {
          if (res == 'success') {
            _this7.$refs.uToast.show({
              type: 'success',
              title: '授权成功~'
            });
            _this7.authModal = false;
          } else {
            _this7.$refs.uToast.show({
              type: 'error',
              title: '授权失败~'
            });
          }
        });
        return;
      }
    },
    joinConfirm: function joinConfirm() {
      var _this8 = this;
      if (!this.isJoin) {
        // 取消报名
        if (this.joinModal.person <= 0) {
          this.$refs.uToast.show({
            type: 'warning',
            title: '请输入参与人数~'
          });
          return;
        }
        this.$u.api.createActOrder({
          aid: this.activityDetail.id,
          person: this.joinModal.person,
          remark: this.joinModal.remark
        }).then(function (res) {
          if (res.code === 200) {
            if (_this8.activityDetail.payType == 0 || _this8.activityDetail.payType == 2) {
              _this8.isJoin = true;
              _this8.activityDetail.perLimit = _this8.activityDetail.perLimit + _this8.joinModal.person;
              _this8.join = {
                id: res.data,
                person: _this8.joinModal.person
              };
              _this8.joinModal.show = false;
              _this8.joinModal = {
                show: false,
                person: 1,
                remark: ''
              };
              if (_this8.activityDetail.payType == 2) {
                _this8.codeModal.show = true;
              }
            } else if (_this8.activityDetail.payType == 1) {
              _this8.join = {
                person: _this8.joinModal.person
              };
              _this8.joinModal.show = false;
              _this8.joinModal = {
                show: false,
                person: 1,
                remark: ''
              };
              uni.navigateTo({
                url: "../act-order-pay/act-order-pay?orderId=".concat(res.data)
              });
            }
          } else {
            _this8.$refs.uToast.show({
              type: 'warning',
              title: res.msg
            });
          }
        });
      }
    },
    joinCancel: function joinCancel() {
      this.joinModal = {
        show: false,
        person: 1,
        remark: ''
      };
    },
    codeCancel: function codeCancel() {
      this.codeModal = {
        show: false
      };
    },
    showImg: function showImg() {
      var imgList = [this.getImgBase + this.activityDetail.qrcodeUrl];
      uni.previewImage({
        urls: imgList // 需要预览的图片http链接列表
      });
    },
    showQrcode: function showQrcode() {
      var _this9 = this;
      if (!this.qrcode) {
        this.$u.api.getQrcode({
          aid: this.id
        }).then(function (res) {
          _this9.qrcode = res.data;
          _this9.qrModal.show = true;
        });
        return;
      }
      this.qrModal.show = true;
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 150:
/*!***************************************************************************************!*\
  !*** D:/nature-app/pages/activity-detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=css& */ 151);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 151:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/nature-app/pages/activity-detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[144,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/activity-detail/detail.js.map