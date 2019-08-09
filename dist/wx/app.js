require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vuex_store__ = __webpack_require__(49);




// 引入vuex

// 将store添加到vue原型中，这样在项目中就可以直接使用this.$store.****了
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_3__vuex_store__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_1_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */], {
	store: __WEBPACK_IMPORTED_MODULE_3__vuex_store__["a" /* default */]
}));
app.$mount();

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(48);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd26cd6c", Component.options)
  } else {
    hotAPI.reload("data-v-bd26cd6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    var logs = void 0;
    if (global.mpvuePlatform === 'my') {
      logs = global.mpvue.getStorageSync({ key: 'logs' }).data || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync({
        key: 'logs',
        data: logs
      });
    } else {
      logs = global.mpvue.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync('logs', logs);
    }
  },
  log: function log() {
    console.log('log at:' + Date.now());
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_env__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mutations__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex_dist_logger__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex_dist_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vuex_dist_logger__);
// 导入Vue和vuex


// 定义debug常量，用于判断当前环境是否是生产环境，生产环境(false)/开发环境(true)

var debug = __WEBPACK_IMPORTED_MODULE_2__common_env__["a" /* default */].DEBUG;

// 引入项目需要的vuex的api





// 引入vuex内置的打印功能，用于查看看vuex相关数据，方便bug排查


// Vue引用vuex
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// 导出生成的vuex.store
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
	state: __WEBPACK_IMPORTED_MODULE_3__state__["a" /* default */],
	getters: __WEBPACK_IMPORTED_MODULE_4__getters__["a" /* default */],
	mutations: __WEBPACK_IMPORTED_MODULE_5__mutations__["a" /* default */],
	actions: __WEBPACK_IMPORTED_MODULE_6__actions__["a" /* default */],
	strict: debug,
	plugins: debug ? [__WEBPACK_IMPORTED_MODULE_7_vuex_dist_logger___default()()] : [] // 当目前环境未开发环境时才执行内置的打印，用于排错
}));

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// create by cuihe
// 配置编译环境和线上环境之间的切换
// baseUrl: 域名地址
// routerMode: 路由模式---这到底是个什么玩意我也不知道
// 此文件目前只设置的开发和生产环境的区分配合，如果还有更多环境（预发布、、、）可依据此文件添加相关环境
// 使用方法：在需要区分环境的地方（一般指的是需要调接口的地方）引入此文件即可

var baseUrl = "";
var routerMode = "history";
var DEBUG = false;
var cancleHTTP = []; // 取消请求头设置,一般也不需要设置

// 根据不同项目，定义下面的不同环境的baseUrl
if (true) {
	// 此为开发环境的地址
	baseUrl = "";
	DEBUG = true;
} else if (process.env.NODE_ENV == "production") {
	// 此为生产环境的地址
	baseUrl = "";
	DEBUG = false;
}

/* harmony default export */ __webpack_exports__["a"] = ({
	baseUrl: baseUrl,
	DEBUG: DEBUG,
	routerMode: routerMode,
	cancleHTTP: cancleHTTP
});

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
	num: 0
};
/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
	getNum: function getNum(state) {
		return state.num;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutations_file__ = __webpack_require__(58);


var _mutations;



var mutations = (_mutations = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_file__["a" /* ADD_NUM */], function (state, data) {
	state.num = data.num;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutations_file__["b" /* MIN_NUM */], function (state, data) {
	state.num = data.num;
}), _mutations);

/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_NUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MIN_NUM; });
var ADD_NUM = "ADD_NUM";
var MIN_NUM = "MIN_NUM";

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var actions = {
	addNum: function addNum(_ref, data) {
		var commit = _ref.commit;

		commit("ADD_NUM", data);
	},
	minNum: function minNum(_ref2, data) {
		var commit = _ref2.commit;

		commit("MIN_NUM", data);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ })

},[18]);