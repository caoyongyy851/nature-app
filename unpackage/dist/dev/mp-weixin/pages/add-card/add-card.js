(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/add-card/add-card"],{

/***/ 117:
/*!********************************************************************!*\
  !*** D:/nature-app/main.js?{"page":"pages%2Fadd-card%2Fadd-card"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _addCard = _interopRequireDefault(__webpack_require__(/*! ./pages/add-card/add-card.vue */ 118));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_addCard.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 118:
/*!*************************************************!*\
  !*** D:/nature-app/pages/add-card/add-card.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_card_vue_vue_type_template_id_3499abf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-card.vue?vue&type=template&id=3499abf4& */ 119);
/* harmony import */ var _add_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-card.vue?vue&type=script&lang=js& */ 121);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_card_vue_vue_type_template_id_3499abf4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_card_vue_vue_type_template_id_3499abf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _add_card_vue_vue_type_template_id_3499abf4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/add-card/add-card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 119:
/*!********************************************************************************!*\
  !*** D:/nature-app/pages/add-card/add-card.vue?vue&type=template&id=3499abf4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_template_id_3499abf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add-card.vue?vue&type=template&id=3499abf4& */ 120);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_template_id_3499abf4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_template_id_3499abf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_template_id_3499abf4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_template_id_3499abf4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 120:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/nature-app/pages/add-card/add-card.vue?vue&type=template&id=3499abf4& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uToast: function() {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-toast/u-toast */ "node-modules/uview-ui/components/u-toast/u-toast").then(__webpack_require__.bind(null, /*! uview-ui/components/u-toast/u-toast.vue */ 273))
    },
    uInput: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-input/u-input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-input/u-input")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-input/u-input.vue */ 412))
    },
    uRadioGroup: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-radio-group/u-radio-group */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-radio-group/u-radio-group")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-radio-group/u-radio-group.vue */ 420))
    },
    uRadio: function() {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-radio/u-radio */ "node-modules/uview-ui/components/u-radio/u-radio").then(__webpack_require__.bind(null, /*! uview-ui/components/u-radio/u-radio.vue */ 427))
    },
    htzImageUpload: function() {
      return __webpack_require__.e(/*! import() | components/htz-image-upload/htz-image-upload */ "components/htz-image-upload/htz-image-upload").then(__webpack_require__.bind(null, /*! @/components/htz-image-upload/htz-image-upload.vue */ 434))
    },
    uPicker: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-picker/u-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-picker/u-picker")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-picker/u-picker.vue */ 441))
    }
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.positionShow = true
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 121:
/*!**************************************************************************!*\
  !*** D:/nature-app/pages/add-card/add-card.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add-card.vue?vue&type=script&lang=js& */ 122);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 122:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/nature-app/pages/add-card/add-card.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;































































































var _vuex = __webpack_require__(/*! vuex */ 42);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var uniNavBar = function uniNavBar() {__webpack_require__.e(/*! require.ensure | components/uni-ui/uni-nav-bar/uni-nav-bar */ "components/uni-ui/uni-nav-bar/uni-nav-bar").then((function () {return resolve(__webpack_require__(/*! @/components/uni-ui/uni-nav-bar/uni-nav-bar.vue */ 299));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =



{
  components: {
    uniNavBar: uniNavBar },

  onLoad: function onLoad(e) {var _this = this;
    this.topicId = e.topicId;
    if (this.topicId) {
      this.selected = {
        id: e.topicId,
        title: e.title };

    }
    uni.getStorage({
      key: 'add-card',
      success: function success(res) {
        if (res.data) {
          var store = JSON.parse(res.data);
          _this.card = store.card;
          if (store.imgList.length > 0) {
            _this.imgList = store.imgList;
          }
          if (store.videoList.length > 0) {
            _this.videoList = store.videoList;
          }

        }
      } });

    this.init();
  },
  onShow: function onShow() {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    if (currPage.data.selected == undefined || currPage.data.selected == '') {} else {
      this.selected = currPage.data.selected;
    }
  },
  data: function data() {
    return {
      selected: null,
      topicId: '',
      positionType: 0,
      choose: "",
      chooseList: [{
        name: '玩场',
        disabled: false },

      {
        name: '地址',
        disabled: false }],


      card: {
        title: "",
        detail: "",
        position: "",
        position1: "",
        position2: "",
        pid: 0,
        time: "",
        imgs: "",
        topicId: "" },

      positionShow: false,
      timeShow: false,
      selector: [],
      headers: {
        'Authorization': 'wx ' + uni.getStorageSync('token') },

      videoList: [],
      imgList: [],
      showBack: false };

  },
  computed: _objectSpread({},
  (0, _vuex.mapGetters)(['getImgBase'])),

  methods: {
    init: function init() {var _this2 = this;
      this.$u.api.getPositionList().then(function (res) {
        _this2.selector = res.data;
      });
    },
    successImg: function successImg(e) {
      var res = JSON.parse(e.data);
      if (res.code === 200) {
        this.imgList.push(this.getImgBase + res.imgUrl);
      }
    },
    successVid: function successVid(e) {
      var res = JSON.parse(e.data);
      if (res.code === 200) {
        this.videoList.push(this.getImgBase + res.vidUrl);
      }
    },
    positionConfirm: function positionConfirm(index) {
      this.card.pid = this.selector[index].id;
      this.card.position1 = this.selector[index].name;
    },
    timeConfirm: function timeConfirm(time) {
      this.card.time = time.year + '-' + time.month + '-' + time.day;
    },
    cardConfirm: function cardConfirm() {var _this3 = this;

      if (!this.card.detail) {
        this.$refs.uToast.show({
          type: 'warning',
          title: '简单写点内容吧~' });

        return;
      }
      if (!this.selected) {
        if (!this.card.position1 && !this.card.position2) {
          this.$refs.uToast.show({
            type: 'warning',
            title: '选择一个地点吧~' });

          return;
        }
        if (!this.card.title) {
          this.$refs.uToast.show({
            type: 'warning',
            title: '标题没填哦~' });

          return;
        }
      } else {
        this.card.topicId = this.selected.id;
      }
      if (this.imgList.length <= 0) {
        this.$refs.uToast.show({
          type: 'warning',
          title: '上传一些美照吧~' });

        return;
      }
      if (this.videoList.length > 0) {
        this.card.vids = this.videoList.map(function (e) {
          return e.replace(_this3.getImgBase, "");
        }).join();
        this.card.vidsNum = this.videoList.length;
      }
      this.card.imgs = this.imgList.map(function (e) {
        return e.replace(_this3.getImgBase, "");
      }).join();
      this.card.imgsNum = this.imgList.length;

      if (this.positionType == 1) {
        this.card.position = this.card.position1;
        delete this.card.position1;
        delete this.card.position2;
      } else if (this.positionType == 2) {
        this.card.position = this.card.position2;
        this.card.pid = 0;
        delete this.card.position1;
        delete this.card.position2;
      }
      this.$u.api.createCard(this.card).then(function (res) {
        if (res.code === 200) {
          uni.removeStorage({
            key: 'add-card' });

          _this3.$refs.uToast.show({
            type: 'success',
            title: '上传成功' });

          var that = _this3;
          var pages = getCurrentPages(); // 当前页面
          var beforePage = pages[pages.length - 2]; // 上一页
          uni.navigateBack({
            success: function success() {
              beforePage.onLoad({
                id: that.topicId });
              // 执行上一页的onLoad方法
            } });

        }
      });
    },
    mapShow: function mapShow() {
      var that = this;
      uni.chooseLocation({
        success: function success(res) {
          that.card.position2 = res.address + '' + res.name;
        },
        fail: function fail() {
          uni.getSetting({
            success: function success(res) {
              var statu = res.authSetting;
              if (!statu['scope.userLocation']) {
                uni.showModal({
                  title: '是否授权当前位置',
                  content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
                  success: function success(tip) {
                    if (tip.confirm) {
                      uni.openSetting({
                        success: function success(data) {
                          if (data.authSetting[
                          "scope.userLocation"] ===
                          true) {
                            uni.showToast({
                              title: '授权成功',
                              icon: 'success',
                              duration: 1000 });

                            //授权成功之后，再调用chooseLocation选择地方
                            setTimeout(
                            function () {
                              uni.chooseLocation({
                                success: function success(
                                res)
                                {
                                  that.card.
                                  position2 =
                                  res.
                                  address +
                                  '' +
                                  res.
                                  name;
                                } });

                            }, 1000);
                          }
                        } });

                    } else {
                      uni.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000 });

                    }
                  } });

              }
            } });

        } });

    },
    radioChange: function radioChange(e) {
      if (e == '玩场') {
        this.positionType = 1;
      } else if (e == '地址') {
        this.positionType = 2;
      }
    },
    clickLeft: function clickLeft() {
      var that = this;
      if ((that.card.detail != '' || that.card.title != '') && !that.showBack) {
        uni.showModal({
          content: '是否要保存为草稿',
          showCancel: true,
          cancelText: '不保存',
          confirmText: '保存',
          success: function success(res) {
            if (res.confirm) {
              uni.setStorage({
                key: 'add-card',
                data: JSON.stringify({
                  card: that.card,
                  imgList: that.imgList,
                  videoList: that.videoList }) });


            } else {
              uni.removeStorage({
                key: 'add-card' });

            }
            uni.navigateBack({
              delta: 1 });

            return;
          } });

      } else {
        this.showBack = true;
        uni.navigateBack({
          delta: 1 });

      }
    },

    toSelect: function toSelect() {
      uni.navigateTo({
        url: '../topic-select/topic-select' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[117,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/add-card/add-card.js.map