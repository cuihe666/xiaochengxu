// 导入Vue和vuex
import Vue from "vue";
import Vuex from "vuex";
// 定义debug常量，用于判断当前环境是否是生产环境，生产环境(false)/开发环境(true)
import env from "../common/env";
const debug = env.DEBUG;

// 引入项目需要的vuex的api
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

// 引入vuex内置的打印功能，用于查看看vuex相关数据，方便bug排查
import createLogger from "vuex/dist/logger";

// Vue引用vuex
Vue.use(Vuex);


// 导出生成的vuex.store
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	strict: debug,
	plugins: debug ? [createLogger()] : [] // 当目前环境未开发环境时才执行内置的打印，用于排错
});